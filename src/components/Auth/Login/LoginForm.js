import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button/Button';
import InputWrap from '../../UI/InputWrap/InputWrap';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import FormWrap from '../../UI/FormWrap/FormWrap';
import useInput from '../../../hooks/Auth/useInput';
import InputError from '../../UI/InputError/InputError';
import {
  validateEmail,
  validatePass,
} from '../../../helpers/Auth/inputsValidations';
import { REMEMBER_USER } from '../../../types/index';
import {
  setDataInLocalStorate,
  getDataFromLocalStorage,
  deleteDataFromLocalStorage,
} from '../../../helpers/global';
import { commitSignIn } from '../../../features/Auth/signInAPI';

function LoginForm() {
  // const navigate = useNavigate();
  const [rememberUser, setRememberUser] = useState(false);

  const {
    value: vEmail,
    isValid: iVEmail,
    inputValidation: emailValidation,
    handleIBlur: hIBEmail,
    handleIChange: hICEmail,
    handleIReset: hIREmail,
    setInput: setEmail,
  } = useInput(validateEmail);
  const {
    value: vPass,
    isValid: iVPass,
    inputValidation: passValidation,
    handleIBlur: hIBPass,
    handleIChange: hICPass,
    handleIReset: hIRPass,
    setInput: setPass,
  } = useInput(validatePass);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = getDataFromLocalStorage(REMEMBER_USER);
    if (!savedUser) return;
    const keys = Object.keys(savedUser);
    if (savedUser && keys.includes('email') && keys.includes('pass')) {
      setEmail(savedUser.email);
      setPass(savedUser.pass);
      setRememberUser(true);
    }
  }, [setEmail, setPass]);

  const handleChecker = () => {
    setRememberUser((prevValue) => {
      const forgetUser = !prevValue === false ? true : false;
      forgetUser && deleteDataFromLocalStorage(REMEMBER_USER);
      return !rememberUser;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!iVEmail || !iVPass) return null;
    if (rememberUser)
      setDataInLocalStorate(REMEMBER_USER, { email: vEmail, pass: vPass });
    dispatch(commitSignIn({ email: vEmail, password: vPass }));
    hIREmail();
    hIRPass();
    setRememberUser(false);
  };

  const emailErrorMsg =
    emailValidation.type === 'required'
      ? 'The email field is required'
      : 'The email field is invalid';
  const PassErrorMsg =
    passValidation.type === 'required'
      ? 'The password field is required'
      : 'The password field is invalid';

  return (
    <>
      <FormWrap>
        <SocialNetworks />

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <legend>Or sign in with credentials</legend>

          <InputWrap>
            <ion-icon name='mail'></ion-icon>
            <input
              type='email'
              id='email'
              placeholder='Email'
              value={vEmail}
              onChange={hICEmail}
              onBlur={hIBEmail}
            />
          </InputWrap>
          {emailValidation.hasError && (
            <InputError msg={emailErrorMsg} className={styles['input-error']} />
          )}

          <InputWrap>
            <ion-icon name='lock-closed'></ion-icon>
            <input
              type='password'
              id='password'
              placeholder='Password'
              value={vPass}
              onChange={hICPass}
              onBlur={hIBPass}
            />
          </InputWrap>
          {passValidation.hasError && (
            <InputError msg={PassErrorMsg} className={styles['input-error']} />
          )}

          <div className={styles['checbox-wrap']}>
            <label htmlFor='remember'>Remember me</label>
            <input
              type='checkbox'
              id='remember'
              name='remember'
              value='remember'
              className={styles['checkbox-input']}
              onChange={handleChecker}
              checked={rememberUser}
            />
          </div>

          <Button>Sign in {rememberUser + ''}</Button>
        </form>

        <Link to='/signin' className={styles['forgot-password-link']}>
          Forgot password
        </Link>
      </FormWrap>
    </>
  );
}

export default LoginForm;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../ResetPassword/ResetPassword.module.css';
import FormWrap from '../../UI/FormWrap/FormWrap';
import InputWrap from '../../UI/InputWrap/InputWrap';
import Button from '../../UI/Button/Button';
import InputError from '../../UI/InputError/InputError';
import { Link } from 'react-router-dom';
import { commitChangePassword } from '../../../features/ResetPassword/resetPasswordAPI';
import useInputsValidation from '../../../hooks/Auth/useInputsValidation';
import validate from '../../../formValidations/ChangePass/validateInfo';
import {
  getDataFromLocalStorage,
  deleteDataFromLocalStorage,
} from '../../../helpers/global/index';
import { TOKEN_KEY_TO_CHANGE_PASS } from '../../../types/index';

function ChangePass() {
  const dispatch = useDispatch();
  const fields = { password: '', confirmPassword: '' };
  const { values, errors, handleChange, handleBlur, handleSubmit } =
    useInputsValidation(fields, validate, handleDispatch);

  useEffect(() => {
    return () => {
      deleteDataFromLocalStorage(TOKEN_KEY_TO_CHANGE_PASS);
    };
  }, []);

  function handleDispatch() {
    const token = getDataFromLocalStorage(TOKEN_KEY_TO_CHANGE_PASS);
    dispatch(commitChangePassword(values, token));
  }

  const legendClasses = `${styles['custom-legend']} margin--bottom-md`;
  return (
    <FormWrap className={styles['form-wrap-chage-p']}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <legend className={legendClasses}>
          <span>Please enter your new password.</span>
          {/* <ion-icon name='lock-open'></ion-icon> */}
        </legend>

        <InputWrap>
          <ion-icon name='lock-closed'></ion-icon>
          <input
            type='password'
            id='password'
            placeholder='Password'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span></span>
        </InputWrap>
        {errors.password && (
          <InputError msg={errors.password} className={styles['input-error']} />
        )}

        <InputWrap className='margin--bottom-md'>
          <ion-icon name='lock-open'></ion-icon>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Confirm password'
            name='confirmPassword'
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span></span>
        </InputWrap>
        {errors.confirmPassword && (
          <InputError
            msg={errors.confirmPassword}
            className={styles['input-error']}
          />
        )}

        <Button>Change Password</Button>
      </form>

      <Link to='/signin' className={styles['go-back-link']}>
        Go back to sign in page
      </Link>
    </FormWrap>
  );
}

export default ChangePass;

import React from 'react';
import styles from '../ResetPassword/ResetPassword.module.css';
import FormWrap from '../../UI/FormWrap/FormWrap';
import InputWrap from '../../UI/InputWrap/InputWrap';
import Button from '../../UI/Button/Button';
import useInput from '../../../hooks/Auth/useInput';
import { useDispatch } from 'react-redux';
import InputError from '../../UI/InputError/InputError';

function ChangePass() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormWrap className={styles['form-wrap-chage-p']}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <legend className={styles['custom-legend']}>
          <span>Please enter you new password.</span>
          <ion-icon name='lock-open'></ion-icon>
        </legend>

        <InputWrap>
          <ion-icon name='lock-closed'></ion-icon>
          <input
            type='password'
            id='password'
            placeholder='Password'
            // value={vPass}
            // onChange={hICPass}
            // onBlur={hIBPass}
          />
          <span></span>
        </InputWrap>
        {/* {true && (
          <InputError msg={passErrorMsg} className={styles['input-error']} />
        )} */}

        <InputWrap className='margin--bottom-md'>
          <ion-icon name='lock-open'></ion-icon>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Confirm password'
            // value={vPass2}
            // onChange={hICPass2}
            // onBlur={hIBPass2}
          />
          <span></span>
        </InputWrap>
        {/* {true && (
          <InputError msg={passErrorMsg2} className={styles['input-error']} />
        )} */}

        <Button>Change Password</Button>
      </form>
    </FormWrap>
  );
}

export default ChangePass;

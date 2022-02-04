import React from 'react';
import styles from './ResetPasswordPage.module.css';
import BoxBackground from '../../../components/UI/Background/BoxBackground';
import ResetPassword from '../../../components/Auth/ResetPassword/ResetPassword';

function ResetPasswordPage() {
  return (
    <>
      <BoxBackground />
      <div className={styles.container}>
        <ResetPassword />
      </div>
    </>
  );
}

export default ResetPasswordPage;

import React from 'react';
import styles from './AuthSpinner.module.css';

function AuthSpinner() {
  return (
    <div className={styles['semipolar-spinner']}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
    </div>
  );
}

export default AuthSpinner;

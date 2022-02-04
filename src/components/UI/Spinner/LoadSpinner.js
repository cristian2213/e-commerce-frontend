import React from 'react';
import styles from './LoadSpinner.module.css';

function LoadSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles['sk-cube-grid']}>
        <div className={`${styles['sk-cube']} ${styles['sk-cube1']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube2']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube3']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube4']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube5']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube6']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube7']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube8']}`}></div>
        <div className={`${styles['sk-cube']} ${styles['sk-cube9']}`}></div>
      </div>
    </div>
  );
}

export default LoadSpinner;

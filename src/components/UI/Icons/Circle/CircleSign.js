import React from 'react';
import styles from './CircleSign.module.css';

function CircleSign({ isSuccess }) {
  const circleType = isSuccess
    ? styles['circle--sucess']
    : styles['circle--failure'];

  return (
    <div className={styles.container}>
      {isSuccess ? (
        <ion-icon
          name='checkmark-circle-outline'
          className={circleType}
        ></ion-icon>
      ) : (
        <ion-icon name='close-circle-outline' className={circleType}></ion-icon>
      )}
    </div>
  );
}

export default CircleSign;

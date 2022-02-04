import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  const type = props.type ? props.type : 'submit';
  const classes = props.className
    ? `${styles.btn} ${props.className}`
    : `${styles.btn} ${styles['btn--full']}`;

  return (
    <button {...props} type={type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

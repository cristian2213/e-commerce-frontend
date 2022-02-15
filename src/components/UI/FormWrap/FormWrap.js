import React from 'react';
import styles from './FormWrap.module.css';

function FormWrap({ className, children }) {
  const classes = className
    ? `${className} ${styles['form-wrap']}`
    : styles['form-wrap'];

  return <div className={classes}>{children}</div>;
}

export default FormWrap;

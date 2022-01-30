import React from 'react';
import styles from './FormWrap.module.css';

function FormWrap(props) {
  return <div className={styles['form-wrap']}>{props.children}</div>;
}

export default FormWrap;

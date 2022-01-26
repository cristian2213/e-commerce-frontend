import React from "react";
import styles from "./InputWrap.module.css";

function InputWrap(props) {
  const wrapStyles = props.className ? props.className : styles.wrap;
  return <div className={wrapStyles}>{props.children}</div>;
}

export default InputWrap;

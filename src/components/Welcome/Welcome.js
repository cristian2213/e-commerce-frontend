import React from "react";
import styles from "./Welcome.module.css";

function Welcome(props) {
  const boxStyles = `${styles["welcome-box"]} ${
    props.className ? props.className : ""
  }`;
  return (
    <div className={boxStyles}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Welcome;

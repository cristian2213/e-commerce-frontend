import React from "react";
import styles from "./Login.module.css";
import Button from "../../UI/Button/Button";
import InputWrap from "../../UI/InputWrap/InputWrap";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked!");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputWrap>
        <ion-icon name="mail"></ion-icon>
        <input type="email" id="email" placeholder="Email" />
      </InputWrap>

      <InputWrap>
        <ion-icon name="lock-closed"></ion-icon>
        <input type="email" id="email" placeholder="Password" />
      </InputWrap>

      <input type="checkbox" />

      <Button>Sign in</Button>
    </form>
  );
}

export default LoginForm;

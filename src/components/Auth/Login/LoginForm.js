import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Button from "../../UI/Button/Button";
import InputWrap from "../../UI/InputWrap/InputWrap";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("clicked!");
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles["signin-box"]}>
          <span>Sign in with</span>
          <div>
            <button>
              <ion-icon name="logo-github"></ion-icon>
              <span>Github</span>
            </button>

            <button>
              <ion-icon name="logo-google"></ion-icon>
              <span>Google</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <legend>Or sign in with credentials</legend>

          <InputWrap>
            <ion-icon name="mail"></ion-icon>
            <input type="email" id="email" placeholder="Email" />
          </InputWrap>

          <InputWrap>
            <ion-icon name="lock-closed"></ion-icon>
            <input type="email" id="email" placeholder="Password" />
          </InputWrap>

          <div className={styles["checbox-wrap"]}>
            <label htmlFor="remember">Remember me</label>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="remember"
              className={styles["checkbox-input"]}
            />
          </div>
          <Button>Sign in</Button>
        </form>
        <Link to="/signin" className={styles["forgot-password-link"]}>
          Forgot password
        </Link>
      </div>
    </>
  );
}

export default LoginForm;

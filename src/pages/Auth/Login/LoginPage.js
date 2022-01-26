import React from "react";
import styles from "./LoginPage.module.css";
import Layout from "../../../components/layout/dashboard/Layout";
import AuthNavigation from "../../../components/layout/authNavegation/AuthNavigation";
import Welcome from "../../../components/Welcome/Welcome";
import LoginForm from "../../../components/Auth/Login/LoginForm";

function LoginPage() {
  return (
    <Layout className={styles.background}>
      <div className={styles["navigation-box"]}>
        <div className={styles.container}>
          {/* NAVEGATION */}
          <AuthNavigation />
          {/* WELCOME MESSAGE */}
          <Welcome
            title="Welcome!"
            desc="Use these awesome forms to login or create new account in your project for free."
            className="margin--top-lg"
          />
          {/* LOGIN COMPONENT */}
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;

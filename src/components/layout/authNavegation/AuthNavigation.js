import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNavigation.module.css";

function AuthNavigation(props) {
  return (
    <nav className={styles.navigation} {...props}>
      <div className={styles["brand-box"]}>
        <h1>Cifullma</h1>
        <img src="/favicon.ico" alt="Brand" />
      </div>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles["is-active"] : ""
            }
            to="/home"
          >
            <ion-icon name="home"></ion-icon>
            <span>Home</span>
          </NavLink>
        </li>

        <li className={styles["nav-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles["is-active"] : ""
            }
            to="/signup"
          >
            <ion-icon name="person"></ion-icon>
            <span>Sign Up</span>
          </NavLink>
        </li>

        <li className={styles["nav-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles["is-active"] : ""
            }
            to="/signin"
          >
            <ion-icon name="log-in"></ion-icon>
            <span>Sign In</span>
          </NavLink>
        </li>

        <li className={styles["nav-item"]}>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles["is-active"] : ""
            }
            to="/dashboard"
          >
            <ion-icon name="layers"></ion-icon>
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AuthNavigation;

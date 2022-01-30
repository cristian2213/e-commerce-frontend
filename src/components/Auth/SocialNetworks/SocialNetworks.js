import React from "react";
import styles from "./SocialNetworks.module.css";

function SocialNetworks() {
  return (
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
  );
}

export default SocialNetworks;

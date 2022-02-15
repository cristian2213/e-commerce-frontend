import React from 'react';
import styles from './ChangePassPage.module.css';
import BoxBackground from '../../../components/UI/Background/BoxBackground';
import ChangePass from '../../../components/Auth/ChangePass/ChangePass';

function ChangePassPage() {
  return (
    <>
      <BoxBackground />
      <div className={styles.container}>
        <ChangePass />
      </div>
    </>
  );
}

export default ChangePassPage;

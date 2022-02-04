import React from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return <div className={styles.modal}>{props.children}</div>;
}

function Modal(props) {
  return (
    <>
      {createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        document.getElementById('overlays')
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
}

export default Modal;

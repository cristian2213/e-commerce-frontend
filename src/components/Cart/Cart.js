import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

function Cart(props) {
  const { title, message, onClose } = props;

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <header className={styles.header}>
        <span>{title}</span>
      </header>
      <main className={styles.content}>
        <p>{message}</p>
      </main>
      <footer className={styles.footer}>
        <Button onClick={handleCloseModal}>Ok</Button>
      </footer>
    </Modal>
  );
}

export default Cart;

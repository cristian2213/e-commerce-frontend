import React from 'react';
import styles from './ResetPasswordPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BoxBackground from '../../../components/UI/Background/BoxBackground';
import ResetPassword from '../../../components/Auth/ResetPassword/ResetPassword';
import {
  selectNotification,
  hideNotification,
} from '../../../features/Notifications/notificationSlice';
import Cart from '../../../components/Cart/Cart';
import { selectIsSuccessful } from '../../../features/RequestStaus/requestStatusSlice';

function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestIsSuccessful = useSelector(selectIsSuccessful);
  const { showNotification, title, message } = useSelector(selectNotification);

  const handleRedirectionToSignIn = () => {
    navigate('/signin');
  };

  const handleCloseModal = () => {
    dispatch(hideNotification());
    if (requestIsSuccessful) {
      handleRedirectionToSignIn();
    }
  };

  return (
    <>
      <BoxBackground />
      <div className={styles.container}>
        <ResetPassword />
        {showNotification && (
          <Cart title={title} message={message} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

export default ResetPasswordPage;

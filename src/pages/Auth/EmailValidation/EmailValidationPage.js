import React, { useEffect } from 'react';
import styles from './EmailValidationPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import LoadSpinner from '../../../components/UI/Spinner/LoadSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectValidToken } from '../../../features/ValidateEmailToken/validateEmailTokenSlice';
import { validateEmailToken } from '../../../features/ValidateEmailToken/validateEmailTokenAPI';
import {
  selectNotification,
  hideNotification,
} from '../../../features/Notifications/notificationSlice';
import Cart from '../../../components/Cart/Cart';

function EmailValidationPage() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasValidToken = useSelector(selectValidToken);
  const { showNotification, title, message } = useSelector(selectNotification);

  const handleCloseModal = () => {
    dispatch(hideNotification());
  };

  /* 
  - NOTE TO ME:
    - MISSING TASKS:
      - CHANGE LoadSpinner FOR A COMPONENT WITH ANIMATIONS.
      - IF THE TOKEN HAS EXPIRED, SO SHOW MODAL WITH INFORMATION AND REDIRECT TO THE RESETPASSWORD COMPONENT TO GENERATE ANOTHER TOKEN.
      - IF THE TOKEN HASN'T EXPIRTED, SO SHOW MODAL AND REDIRECT TO THE CHANGEPASSWORD COMPONENT TO CHANGE THE PASSWORD.
  */
  useEffect(() => {
    if (hasValidToken) navigate('/change-password');

    dispatch(validateEmailToken(token));
  }, [hasValidToken, navigate, dispatch, token]);

  return (
    <div className={styles.container}>
      <LoadSpinner />
      <p className={styles.description}>
        Please wait a moment, We're validating your email.
      </p>
      {showNotification && (
        <Cart title={title} message={message} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default EmailValidationPage;

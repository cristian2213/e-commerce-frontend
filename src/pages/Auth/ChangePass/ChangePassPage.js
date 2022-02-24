import React, { useEffect, useState } from 'react';
import styles from './ChangePassPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BoxBackground from '../../../components/UI/Background/BoxBackground';
import ChangePass from '../../../components/Auth/ChangePass/ChangePass';
import Cart from '../../../components/Cart/Cart';
import {
  selectNotification,
  hideNotification,
} from '../../../features/Notifications/notificationSlice';
import { selectRequestStatus } from '../../../features/RequestStaus/requestStatusSlice';

function ChangePassPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [goToLogin, setGoToLogin] = useState(false);
  const { showNotification, title, message } = useSelector(selectNotification);
  const { requestCompleted, isSuccessful } = useSelector(selectRequestStatus);

  useEffect(() => {
    if (requestCompleted && isSuccessful && goToLogin)
      navigate('/signin', { replace: true });

    if (requestCompleted && !isSuccessful && goToLogin)
      navigate('/reset-password', { replace: true });
  }, [requestCompleted, isSuccessful, navigate, goToLogin]);

  const handleCloseModal = () => {
    dispatch(hideNotification());
    setGoToLogin(true);
  };

  return (
    <>
      <BoxBackground />
      <div className={styles.container}>
        <ChangePass />
        {showNotification && (
          <Cart title={title} message={message} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}

export default ChangePassPage;

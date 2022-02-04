import React, { useEffect } from 'react';
import styles from './LoginPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/layout/Dashboard/Layout';
import AuthNavigation from '../../../components/layout/AuthNavegation/AuthNavigation';
import Welcome from '../../../components/Welcome/Welcome';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import { selectNotification } from '../../../features/Notifications/notificationSlice';
import Cart from '../../../components/Cart/Cart';
import { hideNotification } from '../../../features/Notifications/notificationSlice';
import { selectIsAuthenticated } from '../../../features/Auth/SignIn/signInSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showNotification, title, message } = useSelector(selectNotification);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleCloseModal = () => {
    dispatch(hideNotification());
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard', { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <Layout className={styles.background}>
      <div className={styles['navigation-box']}>
        <div className={styles.container}>
          {/* NAVEGATION */}
          <AuthNavigation />
          {/* WELCOME MESSAGE */}
          <Welcome
            title='Welcome!'
            desc='Use these awesome forms to login or create new account in your project for free.'
            className='margin--top-lg'
          />
        </div>
      </div>
      {/* LOGIN COMPONENT */}
      <div className={`${styles.container}`}>
        {showNotification && (
          <Cart title={title} message={message} onClose={handleCloseModal} />
        )}
        <LoginForm />
      </div>
    </Layout>
  );
}

export default LoginPage;

import React, { useEffect } from 'react';
import styles from './EmailValidationPage.module.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AuthSpinner from '../../../components/UI/Spinner/AuthSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { selectValidToken } from '../../../features/ValidateEmailToken/validateEmailTokenSlice';
import { validateEmailToken } from '../../../features/ValidateEmailToken/validateEmailTokenAPI';
import { selectNotification } from '../../../features/Notifications/notificationSlice';
import CircleSign from '../../../components/UI/Icons/Circle/CircleSign';
import { selectRequestStatus } from '../../../features/RequestStaus/requestStatusSlice';

let timeOut;

function EmailValidationPage() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasValidToken = useSelector(selectValidToken);
  const { message } = useSelector(selectNotification);
  const { requestCompleted, isSuccessful } = useSelector(selectRequestStatus);

  useEffect(() => {
    if (hasValidToken) navigate('/change-password');

    timeOut = setTimeout(() => {
      dispatch(validateEmailToken(token));
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [hasValidToken, navigate, dispatch, token]);

  const CircleComponent =
    requestCompleted && !isSuccessful ? (
      <CircleSign isSuccess={false} />
    ) : (
      requestCompleted && isSuccessful && <CircleSign isSuccess={true} />
    );

  const showMessage = !requestCompleted
    ? "Please wait a moment, We're validating your token."
    : requestCompleted &&
      !isSuccessful && (
        <>
          {message}
          <Link to='/reset-password' replace={true} className={styles.failure}>
            Generate new email
          </Link>
        </>
      );

  const descriptionStyles = `${styles.description} no-copy`;
  return (
    <div className={styles.container}>
      {!requestCompleted && <AuthSpinner />}
      {CircleComponent}
      <p className={descriptionStyles}>{showMessage}</p>
    </div>
  );
}

export default EmailValidationPage;

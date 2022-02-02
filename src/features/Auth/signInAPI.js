import clientAxios from '../../config/clientAxios';
import { showNotification } from '../Notifications/notificationSlice';
import {
  setStartRequest,
  setRequestCompleted,
} from '../RequestStaus/requestStatusSlice';

export function commitSignIn(authData) {
  return async (dispatch) => {
    dispatch(setStartRequest());

    try {
      const response = await clientAxios.post('/auth/signin', authData);
      dispatch(setRequestCompleted());

      dispatch(
        showNotification({
          title: 'Successful request',
          message: response.message,
        })
      );
    } catch (error) {
      dispatch(setRequestCompleted());
      dispatch(
        showNotification({
          title: 'Failed request!',
          message:
            error.response.data.message || 'Failed request, Please try again',
        })
      );
      // FIXME create a switch to manage the different responses from the server
      console.log(error);
    }
  };
}

import clientAxios from '../../config/clientAxios';
import { showNotification } from '../Notifications/notificationSlice';
import {
  setRequestCompleted,
  setStartRequest,
} from '../RequestStaus/requestStatusSlice';
import { parseResponse } from '../../helpers/Requests/parseResponse';

export function commitEmailChecking(email) {
  return async (dispatch) => {
    dispatch(setStartRequest());
    try {
      const response = await clientAxios.post('/users/reset-password', email);
      dispatch(
        setRequestCompleted({
          isSuccessful: true,
        })
      );

      const resposeMsg = parseResponse(response);
      dispatch(
        showNotification({
          title: 'Password reset',
          message: resposeMsg,
        })
      );
    } catch (error) {
      const errorMsg = parseResponse(error, true);
      dispatch(
        setRequestCompleted({
          isSuccessful: false,
        })
      );
      dispatch(
        showNotification({
          title: 'Password reset',
          message: errorMsg,
        })
      );
    }
  };
}

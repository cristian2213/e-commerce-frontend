import clientAxios from '../../config/axios/clientAxios';
import { showNotification } from '../Notifications/notificationSlice';
import {
  setRequestCompleted,
  setStartRequest,
} from '../RequestStaus/requestStatusSlice';
import { parseResponseMsg } from '../../helpers/Requests/parseResponseMsg';

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

      const resposeMsg = parseResponseMsg(response);
      dispatch(
        showNotification({
          title: 'Password reset',
          message: resposeMsg,
        })
      );
    } catch (error) {
      const errorMsg = parseResponseMsg(error, true);
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

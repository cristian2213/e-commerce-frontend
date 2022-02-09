import clientAxios from '../../config/clientAxios';
import { showNotification } from '../Notifications/notificationSlice';
import {
  setStartRequest,
  setRequestCompleted,
} from '../RequestStaus/requestStatusSlice';
import { parseResponseMsg } from '../../helpers/Requests/parseResponseMsg';
import { setEmailToken } from './validateEmailTokenSlice';

export function validateEmailToken(token) {
  return async (dispatch) => {
    dispatch(setStartRequest());
    try {
      const {
        data: { hasValidToken },
      } = await clientAxios.get(`/users/reset-password/${token}`);

      dispatch(
        setRequestCompleted({
          isSuccessful: true,
        })
      );

      dispatch(
        setEmailToken({
          hasValidToken,
        })
      );
    } catch (error) {
      const responseMsg = parseResponseMsg(error, true);
      dispatch(
        setRequestCompleted({
          isSuccessful: false,
        })
      );

      dispatch(
        showNotification({
          title: 'Verify account',
          message: responseMsg,
        })
      );
    }
  };
}

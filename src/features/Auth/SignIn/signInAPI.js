import clientAxios from '../../../config/clientAxios';
import { showNotification } from '../../Notifications/notificationSlice';
import {
  setStartRequest,
  setRequestCompleted,
} from '../../RequestStaus/requestStatusSlice';
import { setAuthentication } from './signInSlice';
import { parseResponse } from '../../../helpers/Requests/parseResponse';
export function commitSignIn(authData) {
  return async (dispatch) => {
    dispatch(setStartRequest());

    try {
      const response = await clientAxios.post('/auth/signin', authData);
      dispatch(
        setRequestCompleted({
          isSuccessful: true,
        })
      );
      const { user, token } = response.data;
      dispatch(
        setAuthentication({
          userData: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          token: {
            ...token,
          },
        })
      );
    } catch (error) {
      const responseMsg = parseResponse(error, true);
      dispatch(
        setRequestCompleted({
          isSuccessful: false,
        })
      );
      dispatch(
        showNotification({
          title: 'Sign In',
          message: responseMsg,
        })
      );
      // FIXME create a switch to manage the different responses from the server
      console.log(error);
    }
  };
}

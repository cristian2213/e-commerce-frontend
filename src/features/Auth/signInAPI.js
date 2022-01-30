import axios from 'axios';
import { setAuthentication } from './signInSlice';

export function commitSignIn(authData) {
  return async (dispatch) => {
    // FIXME Create a slice for notifications or spinner
    // uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Authenticating...',
    //     message: 'Sending data for authentication!',
    //   })

    const sendRequest = async () => {
      // FIXME Create axios Intance
      const url = 'localhost:3001/api/v1/auth/signin';
      const response = await axios({
        method: 'post',
        url,
        data: authData,
      });
      return response;
    };

    try {
      const authResponse = await sendRequest();
      console.log(authResponse);
      dispatch(setAuthentication());
    } catch (error) {
      console.log(error);
      //   dispatch(
      //     uiActions.showNotification({
      //       status: 'error',
      //       title: 'Error!',
      //       message: 'Sending data for authentication failed!',
      //     })
      //   );
    }
  };
}

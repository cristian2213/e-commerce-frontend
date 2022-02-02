import clientAxios from './axios';

const authInterceptor = (token) => {
  if (token) {
    clientAxios.defaults.headers.common['x-access-token'] = token;
  } else delete clientAxios.defaults.headers.common['x-access-token'];
};

export default authInterceptor;

import axios from 'axios';

// LINK https://github.com/axios/axios#config-defaults
const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default clientAxios;

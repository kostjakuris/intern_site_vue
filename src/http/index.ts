import axios from 'axios';

export const backendUrl = process.env.VUE_APP_BACKEND_APP_URL;


export const setAuthHeader = (accessToken: any) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
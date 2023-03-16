import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(async function (config) {
  config.headers.accessKey = process.env.REACT_APP_API_KEY
  return config;
});

export default api;
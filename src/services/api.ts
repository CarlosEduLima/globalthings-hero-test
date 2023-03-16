import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.defaults.headers['Content-Type'] = 'application/json';
api.defaults.headers['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.accessKey = import.meta.env.VITE_API_KEY;
export default api;
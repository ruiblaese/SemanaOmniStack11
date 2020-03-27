import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : "http://192.168.2.3:3333",
});

export default api;

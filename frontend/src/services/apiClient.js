import axios from 'axios';
import config from '../config/environment';

const apiClient = axios.create({
  baseURL: config.api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: config.api.timeout,
});

export default apiClient;

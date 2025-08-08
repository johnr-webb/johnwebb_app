import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here (e.g., authorization)
  },
});

export default apiClient;
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://itramei-waiting-list-backend.vercel.app', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;


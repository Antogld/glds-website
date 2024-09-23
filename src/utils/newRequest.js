import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const newRequest = axios.create({
  baseURL,
  withCredentials: true,
});

// Add a request interceptor to set the Authorization header
newRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default newRequest;
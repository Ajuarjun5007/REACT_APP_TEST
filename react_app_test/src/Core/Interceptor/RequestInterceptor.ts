import axios from 'axios';
const axiosServices = axios.create({ baseURL: process.env.baseUrl || 'https://ghaa-dev.vyogolabs.tech/' });
 
// Add a request interceptor
axiosServices.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
export default axiosServices;
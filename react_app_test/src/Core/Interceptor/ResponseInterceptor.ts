import axiosServices from "./reqInterceptor";

// Add a response interceptor
axiosServices.interceptors.response.use(
  (response) => { 
    
    return response},
  (error) => {
    if(error.response?.status === 403){
      console.error('403')
    }
    if (error.response?.status === 401 ) {
        console.error('401')
    }
    
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);
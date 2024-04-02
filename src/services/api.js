import axios from 'axios'


const api = axios.create ({
    baseURL: 'https://backend.directd.com.br/api/Subscribe'
})

api.interceptors.request.use((config) => {
    config.headers['token'] = 'FA7DF8A9-D00A-4C61-B1FD-C2043A30F5BB';
    return config;
  });
  
  export default api;
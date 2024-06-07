import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
      } else {
        console.error(
          'Błąd serwera:',
          error.response.status,
          error.response.data
        );
      }
    } else if (error.request) {
      console.error('Brak odpowiedzi z serwera:', error.request);
    } else {
      console.error('Błąd podczas tworzenia żądania:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://startdeliver-mock-api.glitch.me',
});

export default api;
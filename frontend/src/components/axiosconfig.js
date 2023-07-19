import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3031',
});

export default instance;

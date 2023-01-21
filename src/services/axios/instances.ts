import axios from 'axios';

export const recognizerApi = axios.create({
  baseURL: 'http://localhost:3000', // development
});

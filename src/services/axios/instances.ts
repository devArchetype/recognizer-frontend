import axios from 'axios';

const apiHost = import.meta.env.VITE_RECOGNIZER_API_HOST;
const apiPort = import.meta.env.VITE_RECOGNIZER_API_PORT;

export const BASE_URL = `${apiHost}:${apiPort}`;

export const recognizerApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

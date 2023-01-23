import axios from 'axios';

const apiHost = import.meta.env.VITE_RECOGNIZER_API_HOST;
const apiPort = import.meta.env.VITE_RECOGNIZER_API_PORT;

export const recognizerApi = axios.create({
  baseURL: `${apiHost}:${apiPort}`,
  headers: {
    'Content-type': 'application/json',
  },
});

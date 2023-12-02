/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants';
import { readToken } from '../services/utils';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer: ${readToken()}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default httpClient;

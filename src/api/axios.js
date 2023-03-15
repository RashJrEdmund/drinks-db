import axios from 'axios';
// import { API_BASE_URL } from "../constants";
// import { readToken } from "../utils";

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

// httpClient.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     config.headers['Authorization'] = `Bearer: ${readToken()}`
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// export { httpClient };
export default httpClient;

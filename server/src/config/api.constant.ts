import * as axios from 'axios';
import https from 'https';

// export const baseURL = `https://jsonplaceholder.typicode.com/`;

export const axiosRequestConfig: axios.AxiosRequestConfig = {
  params: {},
  headers: {},
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
}

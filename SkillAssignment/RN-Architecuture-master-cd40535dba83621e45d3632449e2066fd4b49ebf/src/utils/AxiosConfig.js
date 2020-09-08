/* eslint-disable module-resolver/use-alias */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
import axios from 'axios';

//Also need to change base url in App.js File

//===============Live=============
let BASE_URL = 'https://mycarespot.com/api/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] =
  'GET,PUT,POST,PATCH,DELETE,OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.post['Access-Control-Allow-Headers'] =
  'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

instance.interceptors.request.use(
  async config => {
    try {
      console.log(' *************** Request Sent *****************');
      config.headers.Authorization = 'token';
      config.headers.clinic = 'mycarespot';
      console.log('Request', JSON.stringify(config));
      console.log(' *************** End of Request *****************');
    } catch (error) {}

    return config;
  },
  error => {
    console.log(' *************** Error Response *****************');
    console.log(JSON.stringify(error));
    console.log(' *************** End of Error Response *****************');
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    // do something with the response data
    console.log(' *************** Response was received *****************');
    console.log(JSON.stringify(response));
    console.log(' *************** End of Response *****************');

    return response;
  },
  error => {
    console.log(' *************** Error Response *****************');
    console.log(JSON.stringify(error));
    console.log(' *************** End of Error Response *****************');
    // handle the response error
    return Promise.reject(error);
  },
);

export default instance;

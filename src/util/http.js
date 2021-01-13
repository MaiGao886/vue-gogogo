import axios from 'axios';

let baseUrl = process.env.NODE_ENV === 'development' ? window.api.devBaseYRL : window.api.baseURL;
let instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
});
export {baseUrl};
export default instance;

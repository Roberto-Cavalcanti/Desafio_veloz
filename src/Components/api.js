
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://petstore-demo-endpoint.execute-api.com/petstore/',
});
export default instance;
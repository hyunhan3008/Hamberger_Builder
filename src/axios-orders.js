import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamberger-building.firebaseio.com//'
});

export default instance;
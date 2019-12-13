import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamberger-7f7dc.firebaseio.com/'
});

export default instance;
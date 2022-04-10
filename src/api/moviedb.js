import axios from 'axios';

export const apiKey = '87810ac94f448716b5c3564771d2d0ef'

const defaultOptions = {

    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS, UPDATE',
        'Content-Type': 'application/json',
    },

};



let instance = axios.create(defaultOptions);



export default instance;
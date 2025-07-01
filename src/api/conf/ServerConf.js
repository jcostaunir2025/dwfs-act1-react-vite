import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.6:8762/books-catalogue',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
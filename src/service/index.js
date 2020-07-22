import axios from 'axios';

const endpoint = process.env.API_ENDPOINT;

const api = axios.create({
   baseURL: endpoint || 'https://api.themoviedb.org/3/',
   timeout: 15000
});

export default api;
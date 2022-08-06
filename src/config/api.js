import axios from 'axios';

export const API = axios.create({
  baseURL: 
    'https://backend-friendlist-app.herokuapp.com/api/v1' || 
    'http://localhost:5000/api/v1/',
});
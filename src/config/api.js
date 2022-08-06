import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL ||
    'https://backend-friendlist-app.herokuapp.com/api/v1' || 
    'http://localhost:5000/api/v1/',
});
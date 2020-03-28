import axios from 'axios';

const api = axios.create({baseURL: 'http://mechanically.work:3333/API_SemanaOmnistack11'})

export default api;
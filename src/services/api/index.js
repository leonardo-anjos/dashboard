import axios from 'axios';

const index = axios.create({
  baseURL: 'http://localhost:9200',
});

export { index };

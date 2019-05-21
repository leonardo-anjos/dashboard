import axios from 'axios';

// const index = axios.create({
//   baseURL: 'http://172.17.0.2:9200/_xpack/sql',
// });

const index = axios.create({
  baseURL: 'http://10.32.146.181:9200',
});

export { index };

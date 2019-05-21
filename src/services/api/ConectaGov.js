import { index } from '.';

export const ServiceApiConectaGov = {

  getAll: () => {
    return index.get('/sipes/_search');
  }

};

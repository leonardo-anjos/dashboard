import { api } from ".";

export const ServiceApiConectaGov = {

  getAll: () => {
    return api.get('/_search');
  }

};

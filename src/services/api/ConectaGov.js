import { index } from '.';

export const ServiceApiConectaGov = {

  getAll: () => {
    return index.get('/sipes/_search');
  },

  // rankings api
  getSuperintendenciasFla: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT Superintendencia FROM sipes WHERE Filial = 'FLA' GROUP BY Superintendencia" 
    });
  },

  // grafico barra 1
  getSomaTotalBensEmUso: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT SUM(Valor_Bem) FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
    });
  },

  // grafico de barra 2
  getMediaBensEmUso: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT AVG(Valor_Bem) FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
    });
  }

};
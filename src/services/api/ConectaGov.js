import { index } from '.';

export const ServiceApiConectaGov = {

  // side details
  getTotalAcessos: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "select count(distinct Numero_Patrimonial) from data"
    });
  },

  getOrgaosConsumidores: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT Superintendencia FROM sipes WHERE Filial = 'FLA' GROUP BY Superintendencia" 
    });
  },

  getTotalOrgaosConsumidores: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "select count(distinct Superintendencia) from data" 
    });
  },

  getOrgaosFornecedores: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT Superintendencia FROM sipes WHERE Filial = 'FLA' GROUP BY Superintendencia" 
    });
  },

  getTotalOrgaosFornecedores: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "select count(distinct Orgao) from data" 
    });
  },

  getTotalApisUtilizadas: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "select count(distinct Superintendencia) from data where Filial = 'FLA'" 
    });
  },

  // rankings 
  // representado por superindencias
  // representado por orgaos
  getApis: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT Superintendencia FROM sipes WHERE Filial = 'FLA' GROUP BY Superintendencia" 
    });
  },

  // grafico de barra
  getSomaTotalBensEmUso: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT Superintendencia, SUM(Valor_Bem) AS Total FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
    });
  },

  getMediaBensEmUso: () => {
    return index.post('_xpack/sql?format=json', {
      "query": "SELECT AVG(Valor_Bem) FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
    });
  }

};
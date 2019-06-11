import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../../services/api/index';

const { Option } = Select;

export const OrgaosConsumidoresSelect = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      orgaos: []
    }

    render() {
      const { orgaos } = this.state;
   
      return(
        <Select
          style={{ width: 250 }}
          showSearch
          filterOption
          placeholder="Selecione um órgão consumidor"
          notFoundContent="Órgão não encontrado">
          { orgaos.map(o => 
            <Option key={o}>
              {o[0]}
            </Option> 
          )}
        </Select>
      );
    }
    
    componentDidMount() {
      this.getOrgaosConsumidores(); 
    }

    getOrgaosConsumidores = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select Orgao from data where Filial = 'FLA' group by Orgao"
      });
      this.setState({ orgaos: response.data.rows });
    }

  }

// );; // redux
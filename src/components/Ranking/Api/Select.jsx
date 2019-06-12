import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../../services/api/index';

const { Option } = Select;

export const ApiSelect = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      apis: []
    }

    render() {
      const { apis } = this.state;

      return(
        <Select
          style={{ width: 150 }}
          showSearch
          filterOption
          placeholder="Selecione a API"
          notFoundContent="API não encontrada">
          { apis.map(a =>
              <Option key={a}>
                {a[0]}
              </Option>
          )}
        </Select>
      );
    }
    
    componentDidMount() {
      this.getApi(); 
    }

    getApi = async () => {
      const response = await index.post('_xpack/sql?format=json', {        
        "query": "select Filial from data group by Filial"
      });

      this.setState({ apis: response.data.rows });
    }

  }

// );; // redux
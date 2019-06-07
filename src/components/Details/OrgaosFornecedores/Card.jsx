import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Card, Icon } from 'antd';
import { index } from '../../../services/api/index';

export const DetailsOrgaosFornecedoresCard = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      result: 0
    }

    render() {
      const { result } = this.state;

      return(
        <Card style={{ marginTop: 10 }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>{result}</p>
            <p style={{ fontSize: '12px' }}>Órgãos Fornecedores de Dados</p>
            <Icon type="login" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
          </div>
        </Card>
      );
    }
    
    componentDidMount() {
      this.getQtdOrgFornecedores(); 
    }

    getQtdOrgFornecedores = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select count(distinct Superintendencia) from data" 
      });

      this.setState({ result: response.data.rows[0] });
    }

  }

// );; // redux
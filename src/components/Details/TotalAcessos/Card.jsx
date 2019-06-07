import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Card, Icon } from 'antd';
import { index } from '../../../services/api/index';

export const DetailsTotalAcessosCard  =

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
            <p style={{ fontSize: '12px' }}>Total de Acessos</p>
            <Icon type="interation" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
          </div>
        </Card>
      );
    }
  
    componentDidMount() {
      this.getTotalAcessos(); 
    }
  
    getTotalAcessos = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select count(distinct Numero_Patrimonial) from data" 
      });
  
      this.setState({ result: response.data.rows[0] });
    }
  
  }

// ); // redux
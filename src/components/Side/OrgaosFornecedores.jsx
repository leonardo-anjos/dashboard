import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideOrgaosFornecedores extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p style={{ textAlign: 'center', fontWeight: 'bold'}}>Órgãos Fornecedores de Dados</p>
        <Icon type="login" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
      </Card>
    );
  }
}
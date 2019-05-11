import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideOrgaosFornecedores extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p>Órgãos Fornecedores de Dados</p>
        <Icon type="login"/>
      </Card>
    );
  }
}
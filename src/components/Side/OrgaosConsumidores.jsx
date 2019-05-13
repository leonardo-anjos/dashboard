import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideOrgaosConsumidores extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p style={{ textAlign: 'center', fontWeight: 'bold'}}>Órgãos Consumidores de Dados</p>
        <Icon type="logout" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
      </Card>
    );
  }
}
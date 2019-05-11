import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideOrgaosConsumidores extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p>Órgãos Consumidores de Dados</p>
        <Icon type="logout"/>
      </Card>
    );
  }
}
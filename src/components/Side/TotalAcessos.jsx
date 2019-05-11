import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideTotalAcessos extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p>Total de Acessos</p>
        <Icon type="interation" theme="twoTone" />
      </Card>
    );
  }
}
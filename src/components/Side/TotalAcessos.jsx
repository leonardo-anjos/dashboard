import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideTotalAcessos extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p style={{ textAlign: 'center', fontWeight: 'bold'}}>Total de Acessos</p>
        <Icon type="interation" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
      </Card>
    );
  }
}
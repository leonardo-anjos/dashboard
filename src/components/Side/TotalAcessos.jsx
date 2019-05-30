import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideTotalAcessos extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold'}}>Total de Acessos</p>
          <Icon type="interation" style={{ fontSize: '30px', color: '#08c'}} theme="outlined"/>
        </div>
      </Card>
    );
  }
}
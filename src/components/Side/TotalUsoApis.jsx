import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideTotalUsoApis extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p style={{ textAlign: 'center', fontWeight: 'bold'}}>Total de APIs utilizadas</p>
        <Icon type="api" style={{ fontSize: '30px', color: '#08c', position: 'relative'}} theme="outlined"/>
      </Card>
    );
  }
}
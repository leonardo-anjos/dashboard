import React, { Component } from 'react';
import { Card, Icon } from 'antd';

export class SideTotalUsoApis extends Component {
  render() {
    return(
      <Card style={{ marginTop: 10 }}>
        <p>Total de APIs utilizadas</p>
        <Icon type="api" theme="twoTone" />
      </Card>
    );
  }
}
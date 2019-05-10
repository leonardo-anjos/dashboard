import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

const dataSource = [
  ['Mes/Ano', 'Valores'],
  ['Out/18', 308],
  ['Nov/18', 364],
  ['Dez/18', 206],
  ['Jan/18', 910],
  ['Fev/18', 791],
  ['Mar/18', 623],
  ['Abr/18', 188],
  ['Mai/19', 423]
]

export class GraficoBarra2 extends Component {
  render() {
    return(
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={dataSource}
        options={{
          chart: {
            title: 'Consumo de APIs',
            subtitle: 'Valores referente a intervelo de 2018-2019',
          },
        }}
      />
    );
  }
}
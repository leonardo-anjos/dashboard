import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

const dataSource = [
  [
    'Element',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify',
    },
  ],
  ['Copper', 8.94, '#b87333', null],
  ['Silver', 10.49, 'silver', null],
  ['Gold', 19.3, 'gold', null],
  ['Platinum', 21.45, 'color: #e5e4e2', null],
]

export class GraficoBarra1 extends Component {
  render() {
    return(
      <Chart
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={dataSource}
        options={{
          title: 'Density of Precious Metals, in g/cm^3',
          width: 600,
          height: 400,
          bar: { groupWidth: '95%' },
          legend: { position: 'none' },
        }}
        // For tests
        rootProps={{ 'data-testid': '6' }}
      />
    );
  }
}
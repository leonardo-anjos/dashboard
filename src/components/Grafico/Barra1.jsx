import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from './Redux'

// import { Chart } from 'react-google-charts';

// const dataSource = [
//   [
//     'Orgao',
//     'Total',
//     { role: 'style' },
//     {
//       sourceColumn: 0,
//       role: 'annotation',
//       type: 'string',
//       calc: 'stringify',
//     },
//   ],
//   ['SERPRO', 24, '#F25764', null],
//   ['Min. Planejamento', 76, '#D8DCD8', null],
//   ['MEC', 64, '#409EEC', null],
//   ['DATAPREV', 52, '#54BF64', null],
//   ['Uber', 9, '#F29727', null] 
// ]

export const GraficoBarra1 =

connect(
  ({ alldata }) => ({ alldata }),
  { getAll }
)(
  class extends Component {

    render() {
      
      return(
        // <Chart
        //   chartType="BarChart"
        //   loader={<div>Loading Chart</div>}
        //   // data={dataSource}
        //   options={{
        //     title: 'Média de Requisições',
        //     width: 600,
        //     height: 400,
        //     bar: { groupWidth: '70%' },
        //     legend: { position: 'none' },
        //   }}
        // />
        <div>GraficoBarra1</div>
      );

    }

    componentDidMount() {
      this.props.getAll();
    }

  } // class

); // redux

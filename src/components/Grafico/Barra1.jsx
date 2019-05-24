import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getSomaTotalBensEmUso } from './Redux'
import { Chart, Geom, Axis, Tooltip } from "bizcharts";

import { index } from '../../services/api/index';

const cols = {
  sales: {
    tickInterval: 100
  }
};

export const GraficoBarra1 =

// connect(
//   ({ graficosBarra }) => ({ graficosBarra }),
//   { getSomaTotalBensEmUso }
// )(
  class extends Component {

    state = {
      somaTotalBens: []
    }

    render() {
      const { somaTotalBens } = this.state; 
      // const { data: graficoBarra } = this.props.graficosBarra;
      // console.log(somaTotalBens);
      
      return(
        <Chart height={400} data={somaTotalBens} scale={cols} forceFit>
          <Axis name="0" />
          <Axis name="1" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="0*1" />
        </Chart>
      );

    }

    componentDidMount() {
      // this.props.getSomaTotalBensEmUso();
      this.getSomaTotalBensEmUso();
    }

    getSomaTotalBensEmUso = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "SELECT Superintendencia, SUM(Valor_Bem) AS Total FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
      });
      // console.log(response.data.rows);
      this.setState({ somaTotalBens: response.data.rows });
    }

  } // class

// ); // redux

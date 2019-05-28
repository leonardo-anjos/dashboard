import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getMediaBensEmUso } from "./Redux";
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
import { index } from '../../services/api/index';

const cols = {
  '0': {
    min: 0
  },
  '1': {
    range: [0, 1]
  }
};

export const GraficoBarra2 =

// connect(
//   ({ graficosBarra }) => ({ graficosBarra }),
//   { getMediaBensEmUso }
// )(
  class extends Component {

    state = {
      mediaBens: []
    }
    
    render() {
      const { mediaBens } = this.state;

      return(
        <Chart height={400} data={mediaBens} scale={cols} forceFit>
          <Axis name="0" />
          <Axis name="1" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="line" position="0*1" size={2} />
          <Geom
            type="point"
            position="0*1"
            size={4}
            shape={"circle"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      );

    }

    componentDidMount() {
      // this.props.getMediaBensEmUso(); 
      this.getMediaBensEmUso();
    }

    getMediaBensEmUso  = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "SELECT Mes, Ano, sum(Valor_Bem) as total FROM data where Ano = '2016' group by Ano, Mes" 
      });

      response.data.rows.map(e => {
        const mesAno = e[0].concat('/').concat(e[1]);
        e[0] = mesAno;
        e[1] = e[2];
        e.pop();
        return response.data.rows;
      });
      
      this.setState({ mediaBens: response.data.rows });

    }

  } // class

// ); // redux


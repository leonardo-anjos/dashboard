import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getMediaBensEmUso } from "./Redux";
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
import { index } from '../../services/api/index';

// const data = [
//   {
//     year: "Out/2018",
//     value: 333
//   },
//   {
//     year: "Nov/2018",
//     value: 194
//   },
//   {
//     year: "Dez/2018",
//     value: 297
//   },
//   {
//     year: "Jan/2019",
//     value: 114
//   },
//   {
//     year: "Fev/2019",
//     value: 348
//   },
//   {
//     year: "Mar/2019",
//     value: 445
//   },
//   {
//     year: "Abr/2019",
//     value: 108
//   },
//   {
//     year: "Mai/2019",
//     value: 470
//   }
// ];

const cols = {
  value: {
    min: 0
  },
  year: {
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
      // const { data: graficosBarra } = this.props.graficosBarra;
      // console.log(graficosBarra);
      
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
        "query": "SELECT Superintendencia, AVG(Valor_Bem) AS Total FROM sipes WHERE Filial = 'FLA' AND Tipo_Classe = 'T' AND Estado = 'Em Uso' GROUP BY Superintendencia" 
      });
      // console.log(response.data.rows);
      this.setState({ mediaBens: response.data.rows });
    }

  } // class

// ); // redux


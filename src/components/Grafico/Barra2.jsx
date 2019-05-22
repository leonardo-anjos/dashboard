import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMediaBensEmUso } from "./Redux";
import { Chart, Geom, Axis, Tooltip } from "bizcharts";

const data = [
  {
    year: "1951 年",
    sales: 38
  },
  {
    year: "1952 年",
    sales: 52
  },
  {
    year: "1956 年",
    sales: 61
  },
  {
    year: "1957 年",
    sales: 145
  },
  {
    year: "1958 年",
    sales: 48
  },
  {
    year: "1959 年",
    sales: 38
  },
  {
    year: "1960 年",
    sales: 38
  },
  {
    year: "1962 年",
    sales: 38
  }
];

const cols = {
  sales: {
    tickInterval: 20
  }
};

export const GraficoBarra2 =

connect(
  ({ graficosBarra }) => ({ graficosBarra }),
  { getMediaBensEmUso }
)(
  class extends Component {
    
    render() {

      const { data: graficosBarra } = this.props.graficosBarra;
      console.log(graficosBarra);
      
      return(
        <div>
          <Chart height={400} data={data} scale={cols} forceFit>
            <Axis name="year" />
            <Axis name="sales" />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="interval" position="year*sales" />
          </Chart>
        </div>
      );

    }

    componentDidMount() {
      this.props.getMediaBensEmUso(); 
    }

  } // class

); // redux


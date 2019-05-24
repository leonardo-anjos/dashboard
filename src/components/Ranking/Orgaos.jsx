import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Row, Col, Select, Input } from 'antd';
import { Row, Col, Select, Input, Button } from 'antd';
import { getSuperintendenciasFla } from './Redux';
// import { Chart, Geom, Axis, Tooltip, Coord, Label } from "bizcharts";
import DataSet from "@antv/data-set";

const { DataView } = DataSet;

const data = [
  {
    item: "SERPRO",
    count: 40
  },
  {
    item: "POLICIA FEDERAL",
    count: 21
  },
  {
    item: "MEC",
    count: 17
  },
  {
    item: "DATAPREV",
    count: 13
  },
  {
    item: "STF",
    count: 9
  }
];

const dv = new DataView();

dv.source(data).transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});

// const cols = {
//   percent: {
//     formatter: val => {
//       val = val * 100 + "%";
//       return val;
//     }
//   }
// };

const Option = Select.Option;

export const RankingOrgaos =

connect(
  ({ superintendenciasFla }) => ({ superintendenciasFla }),
  { getSuperintendenciasFla }
)(
  class extends Component {

    render() {

      // const { data: superintendenciasFla } = this.props.superintendenciasFla;
      // console.log(superintendenciasFla);
      
      return(
        <React.Fragment>
          <Row gutter={16}>
            <h1 style={{ backgroundColor: "#0C1A2D", color: "#ffff", fontWeight:"bold" }}>Ranking por Órgão</h1>
            <Col span={12}>
              <Select defaultValue="select1" style={{ width: "100%" }} onChange={this.handleChange}>
                <Option value="select1">Min. Fazenda</Option>
                <Option value="select2">Casa da Moeda</Option>
                <Option value="select3">Min. da Economia</Option>
                <Option value="select4 ">Min. do Planejamento</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Input placeholder="Quantidade"/>
            </Col>
          </Row>
          
          <img 
          style={{ margin: "20px auto 0", padding: "0 20px", paddingBottom: "40px" }}
          src="data:image/png;base64,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" alt=""/>
        
          {/* graphic */}
          {/* <Chart
            height={window.innerHeight}
            data={dv}
            scale={cols}
            forceFit
          >
            <Coord type="theta" radius={0.75} />
            <Axis name="percent" />
            <Tooltip
              showTitle={false}
              itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
            />
            <Geom
              type="intervalStack"
              position="percent"
              color="item"
              tooltip={[
                "item*percent",
                (item, percent) => {
                  percent = percent * 100 + "%";
                  return {
                    name: item,
                    value: percent
                  };
                }
              ]}
              style={{
                lineWidth: 1,
                stroke: "#fff"
              }}
            >
              <Label
                content="percent"
                formatter={(val, item) => {
                  return item.point.item + ": " + val;
                }}
              />
            </Geom>
          </Chart> */}

          <Row gutter={16}>
            <Col span={12}>
              <Button style={{ width: "100%" }}>Consumidor</Button>
            </Col>
            <Col span={12}>
              <Button style={{ width: "100%" }}>Fornecedor</Button>
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  
    handleChange = (value) => {
      console.log(`selected ${value}`);
    }

    componentDidMount() {
      this.props.getSuperintendenciasFla();
    }
  
  } // class

); // redux

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Select, Input, Button } from 'antd';
import { getSuperintendenciasFla } from './Redux';
import { Chart, Geom, Axis, Tooltip, Coord, Label } from "bizcharts";
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

const cols = {
  percent: {
    formatter: val => {
      val = val * 100 + "%";
      return val;
    }
  }
};

const Option = Select.Option;

export const RankingOrgaos =

connect(
  ({ superintendenciasFla }) => ({ superintendenciasFla }),
  { getSuperintendenciasFla }
)(
  class extends Component {

    render() {

      const { data: superintendenciasFla } = this.props.superintendenciasFla;
      console.log(superintendenciasFla);
      
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
          
          {/* graphic */}
          <Chart
            height={window.innerHeight}
            data={dv}
            scale={cols}
            padding={[80, 100, 80, 80]}
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
          </Chart>

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

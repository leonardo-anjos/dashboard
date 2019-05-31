import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { index } from '../../services/api/index';
// import { reducer data } from './Redux'; 
import { Row, Col, Select, Input } from 'antd';
import {Chart} from 'react-google-charts';

const Option = Select.Option;

export const RankingApi =

// connect(
//   ({ redux }) => ({ redux }),
//   { reducer }
// )(

  class extends Component {

    state = {
      result: []
    }

    render() {
      const { result } = this.state;
      
      return(
        <React.Fragment>
          <Row gutter={16}>
            <h1 style={{ backgroundColor: "#0C1A2D", color: "#ffff", fontWeight: "bold" }}>Ranking por API</h1>
            <Col span={12}>
              <Select defaultValue="select1" style={{ width: "100%" }} onChange={this.handleChange}>
                <Option value="select1">SERPRO</Option>
                <Option value="select2">Correios</Option>
                <Option value="select4">CAIXA</Option>
                <Option value="select5">SENASP</Option>
                <Option value="select6">Uber</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Input placeholder="Quantidade"/>
            </Col>
          </Row>

          {/* graphic */}
          <Chart
            style={{ margin: "20px auto 0", padding: "0 20px" }}
            height={'300px'}
            chartType="TreeMap"
            loader={<div>Loading Chart</div>}
            data={result}
            rootProps={{ 'data-testid': '1' }}
          />
        </React.Fragment>
      );
    }

    componentDidMount() {
      // this.props.reducer();
      this.getData(); 
    }

    getData = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select Orgao as org, Superintendencia sup, count(Numero_Patrimonial) as cnt from data where Filial = 'FLA' and sup = 'SUPOP' group by sup, org" 
      });

      response.data.rows[0] = ["orgao", "superintendencia", "total"];
      response.data.rows[1] = ["SUPOP", null, 0];
      this.setState({ result: response.data.rows });
    }
  
  } // class

// ); // redux 
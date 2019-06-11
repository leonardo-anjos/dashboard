import React, { Component } from 'react';
import { Form, Row, Col, Button, DatePicker } from 'antd';
import { OrgaosConsumidoresSelect } from '../Orgaos/Consumidores/Select';
import { OrgaosFornecedoresSelect } from '../Orgaos/Fornecedores/Select';
import { ApiSelect } from '../Ranking/Api/Select';
import { CalendarMonthsSelect } from '../UI/CalendarMonthsSelect';
import { YearSelect } from '../UI/YearSelect';
import './Select.css';

const { RangePicker } = DatePicker;

export class FilterSelect extends Component {
  
  state = {
    size: 'default'
  }

  render() {
    
    return(
      <Form layout="inline" onSubmit={this.handleSearch}>
        <Form.Item label="Ano">
          <YearSelect />
        </Form.Item>
        <Form.Item label="Mês">
          <CalendarMonthsSelect />
        </Form.Item>
        {/* <Form.Item label="Período">
          <Select style={{width: '100px'}} size={size} placeholder="Período">{ano}</Select>
        </Form.Item> */}
        <Form.Item label="Período">
          {/* {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)} */}
          <RangePicker format="DD-MM-YYYY"/>
        </Form.Item>
        <Form.Item label="API">
          <ApiSelect/>
        </Form.Item>
        <Form.Item label="Órgão Consumidor">
          <OrgaosConsumidoresSelect />
        </Form.Item>
        <Form.Item label="Órgão Fornecedor">
          <OrgaosFornecedoresSelect />
        </Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  handleSearch = e => {
    // console.log('handleSubmit');
    console.log(e)
  };

}
import React, { Component } from 'react';
import { Select, Form, Row, Col, Button } from 'antd';
import { YearSelect } from '../UI/YearSelect';
import { CalendarMonthsSelect } from '../UI/CalendarMonthsSelect';
import { OrgaosConsumidoresSelect } from '../Orgaos/Consumidores/Select';

import './Select.css';

const Option = Select.Option;

const ano = [];
for (let i = 1990; i <= 2019; i++) {
  ano.push(<Option key={i}>{i}</Option>);
}

export class FilterSelect extends Component {
  
  state = {
    size: 'default'
  }

  render() {
    const { size } = this.state;
    
    return(
      // className="filter"
      <Form layout="inline" onSubmit={this.handleSearch}>
        <Form.Item label="Ano">
          <YearSelect />
        </Form.Item>
        <Form.Item label="Mês">
          <CalendarMonthsSelect />
        </Form.Item>
        <Form.Item label="Período">
          <Select style={{width: '100px'}} size={size} placeholder="Período">{ano}</Select>
        </Form.Item>
        <Form.Item label="API">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="API"
            optionFilterProp="children">
            <Option value="cpf">Consulta CPF</Option>
            <Option value="manifestacao">Consulta Manisfestação</Option>
            <Option value="siape">Consulta SIAPE</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Órgão Consumidor">
          <OrgaosConsumidoresSelect />
        </Form.Item>
        <Form.Item label="Órgão Fornecedor">
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder="Órgão Fornecedor"
            optionFilterProp="children">
            <Option value="rf">Receita Federal</Option>
            <Option value="ogu">Ouvidoria Geral da União</Option>
            <Option value="mp">Ministério do Planejamento</Option>
          </Select>
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
    alert('resultado da busca')
  };

}
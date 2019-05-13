import React, { Component } from 'react';
import { Select } from 'antd';
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
      <div className="filter">
        <Select style={{width: '100px'}} size={size} placeholder="Ano">{ano}</Select>
        <Select style={{width: '150px'}} placeholder="Mês">
          <Option value="jan">Janeiro</Option>
          <Option value="fev">Fevereiro</Option>
          <Option value="mar">Março</Option>
          <Option value="abr">Abril</Option>
          <Option value="mai">Maio</Option>
          <Option value="jun">Junho</Option>
          <Option value="jul">Julho</Option>
          <Option value="ago">Agosto</Option>
          <Option value="set">Setembro</Option>
          <Option value="out">Outubro</Option>
          <Option value="nov">Novembro</Option>
          <Option value="dez">Dezembro</Option>
        </Select>
        <Select style={{width: '100px'}} size={size} placeholder="Período">{ano}</Select>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="API"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          <Option value="cpf">Consulta CPF</Option>
          <Option value="manifestacao">Consulta Manisfestação</Option>
          <Option value="siape">Consulta SIAPE</Option>
        </Select>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Órgão Consumidor"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          <Option value="serpro">SERPRO</Option>
          <Option value="correios">Correios</Option>
          <Option value="caixa">Caixa</Option>
        </Select>
        <Select
          showSearch
          style={{ width: 250 }}
          placeholder="Órgão Fornecedor"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          <Option value="rf">Receita Federal</Option>
          <Option value="ogu">Ouvidoria Geral da União</Option>
          <Option value="mp">Ministério do Planejamento</Option>
        </Select>
      </div>
    );
  }
}
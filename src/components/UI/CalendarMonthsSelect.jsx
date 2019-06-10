import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

export class CalendarMonthsSelect extends Component {
    
  render() {
    return(
      <Select style={{width: '120px'}} placeholder="Mês">
        <Option value="01">Janeiro</Option>
        <Option value="02">Fevereiro</Option>
        <Option value="03">Março</Option>
        <Option value="04">Abril</Option>
        <Option value="05">Maio</Option>
        <Option value="06">Junho</Option>
        <Option value="07">Julho</Option>
        <Option value="08">Agosto</Option>
        <Option value="09">Setembro</Option>
        <Option value="10">Outubro</Option>
        <Option value="11">Novembro</Option>
        <Option value="12">Dezembro</Option>
      </Select>
    );
  }
  
  onChange(value) {
    console.log(`selected ${value}`);
  }
  
  onBlur() {
    console.log('blur');
  }
  
  onFocus() {
    console.log('focus');
  }
  
  onSearch(val) {
    console.log('search:', val);
  }

}

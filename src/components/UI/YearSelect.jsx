import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

const ano = [];
for (let i = 1990; i <= 2019; i++) {
  ano.push(<Option key={i}>{i}</Option>);
}

export class YearSelect extends Component {
  
  state = {
    size: 'default'
  }

  render() {
    const { size } = this.state;
    
    return(
      <Select 
        style={{width: '80px'}} 
        size={size} 
        placeholder="Ano">
        {ano}
      </Select>
    );
  };

}
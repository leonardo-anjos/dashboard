import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../../services/api/index';

const { Option } = Select;

export const OrgaosFornecedoresSelect = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      result: 0
    }

    render() {
      const { result } = this.state;

      return(
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
          filterOption={
            (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      );
    }
    
    componentDidMount() {
      this.getOrgaosFornecedores(); 
    }

    getOrgaosFornecedores = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select Superintendencia from data group by Superintendencia"
      });

      this.setState({ result: response.data.rows[0] });
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

// );; // redux
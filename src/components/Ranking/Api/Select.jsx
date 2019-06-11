import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../../services/api/index';

const { Option } = Select;

export const ApiSelect = 

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
          style={{ width: 200 }}
          showSearch
          filterOption
          placeholder="Selecione a API"
          notFoundContent="API não encontrada"
          // { orgaos.map(o =>
          //     <Option 
          //       key={}
          //       value="jack">
          //       {o.nome}
          //     </Option>
          // )}
        >
        </Select>
      );
    }
    
    componentDidMount() {
      this.getApi(); 
    }

    getApi = async () => {
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
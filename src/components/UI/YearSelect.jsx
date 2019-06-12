import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../services/api/index';

const { Option } = Select;

export const YearSelect = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      years: []
    }

    render() {
      const { years } = this.state;
   
      return(
        <Select
          style={{ width: 100 }}
          >
          { years.map(o => 
            <Option key={o}>
              {o[0]}
            </Option> 
          )}
        </Select>
      );
    }
    
    componentDidMount() {
      this.getAnos(); 
    }

    getAnos = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select Ano from data group by Ano order by Ano desc"
      });
      this.setState({ years: response.data.rows });
    }

  }

// );; // redux
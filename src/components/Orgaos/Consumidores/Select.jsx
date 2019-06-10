import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getTotalAcessos } from './Redux';
import { Select } from 'antd';
import { index } from '../../../services/api/index';

const { Option } = Select;

export const OrgaosConsumidoresSelect = 

// connect(
//   ({ totalAcessos }) => ({ totalAcessos }),
//   { getTotalAcessos }
// )(
  class extends Component {

    state = {
      orgaos: []
    }

    render() {
      const { orgaos } = this.state;
      // console.log(orgaos)

      return(
        <Select
          style={{ width: 200 }}
          showSearch
          filterOption
          placeholder="Selecione uma API"
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
      this.getOrgaosConsumidores(); 
    }

    getOrgaosConsumidores = async () => {
      const response = await index.post('_xpack/sql?format=json', {
        "query": "select Orgao from data where Filial = 'FLA' group by Orgao"
      });

      response.data.rows.map(e => {
        console.log(e[0])
      })

      this.setState({ orgaos: response.data.rows });
    }

  }

// );; // redux
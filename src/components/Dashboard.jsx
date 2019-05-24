import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { SideTotalAcessos } from './Side/TotalAcessos';
import { SideOrgaosConsumidores } from './Side/OrgaosConsumidores';
import { SideOrgaosFornecedores } from './Side/OrgaosFornecedores';
import { SideTotalUsoApis } from './Side/TotalUsoApis';
import { RankingOrgaos } from './Ranking/Orgaos';
import { RankingApi } from './Ranking/Api';
import { GraficoBarra1 } from './Grafico/Barra1';
import { GraficoBarra2 } from './Grafico/Barra2';
import { FilterSelect } from './Filter/Select';
import './Dashboard.css';

const { Header, Content, Footer, Sider } = Layout;

export class Dashboard extends Component {
  render() {
    return(
      <Layout className="dashboard">
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
          <div id="logo">
            <p>CONECTA <b style={{ color: '#409EEC'}}>GOV</b></p>
          </div>
          <div className="details_side">
            <SideTotalAcessos />
            <SideOrgaosConsumidores />
            <SideOrgaosFornecedores />
            <SideTotalUsoApis />
          </div>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff'}}>
            <FilterSelect/>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Row gutter={24}> 
                <Col span={12}>
                  <RankingOrgaos/>
                </Col>
                <Col span={12}>
                  <RankingApi/>
                </Col>
              </Row>
            </div>
          </Content>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Row gutter={24}> 
                <Col span={12}>
                  <GraficoBarra1/>
                </Col>
                <Col span={12}>
                  <div style={{ paddingTop: 20 }}>
                    <GraficoBarra2/>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center'}}>
            Serviço Federal de Processamento de Dados - SERPRO
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


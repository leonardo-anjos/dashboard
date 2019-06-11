import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { FilterSelect } from './Filter/Select';
import { DetailsTotalAcessosCard } from './Details/TotalAcessos/Card';
import { DetailsOrgaosConsumidoresCard } from './Details/OrgaosConsumidores/Card';
import { DetailsOrgaosFornecedoresCard } from './Details/OrgaosFornecedores/Card';
import { DetailsApisUtilizadasCard } from './Details/ApisUtilizadas/Card';
import { RankingOrgaoGrafico } from './Ranking/Orgao/Grafico';
import { RankingApiGrafico } from './Ranking/Api/Grafico';
import { GraficoBarra1 } from './Grafico/Barra1';
import { GraficoBarra2 } from './Grafico/Barra2';
import './Dashboard.css';

const { Content, Footer, Sider } = Layout;

export class Dashboard extends Component {
  render() {
    return(
      <Layout className="dashboard">
        <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
          <div id="logo">
            <p>CONECTA <b style={{ color: '#409EEC'}}>GOV</b></p>
          </div>
          <div id="details_side">
            <DetailsTotalAcessosCard />
            <DetailsOrgaosConsumidoresCard />
            <DetailsOrgaosFornecedoresCard />
            <DetailsApisUtilizadasCard />
          </div>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff' }}>
              <p><b>Filtros Gerais:</b></p>
              <FilterSelect/>
            </div>
          </Content>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Row gutter={24}> 
                <Col span={12}>
                  <RankingOrgaoGrafico />
                </Col>
                <Col span={12}>
                  <RankingApiGrafico />
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
                  <GraficoBarra2/>
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


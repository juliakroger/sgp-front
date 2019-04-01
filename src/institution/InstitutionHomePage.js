import React, {Component} from 'react';
import {Layout, Menu, Icon,} from 'antd';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import data from '../API/menu.json';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Place from "./pages/Place";
import QuestionsBatch from "./pages/QuestionsBatch";
import Candidate from "./pages/Candidate";
import QuestionsBatchObjective from "./pages/QuestionsBatchObjetive";
import QuestionsBatchDiscursive from "./pages/QuestionsBatchDiscursive";
import Process from "./pages/Process";
import UploadImagesView from "./pages/UploadImagesView";
import ProcessImageValidation from "./pages/ProcessImageValidation";
import TemplateTest from "./pages/TemplateTest";


const { Sider} = Layout;
const SubMenu = Menu.SubMenu;

class InstitutionHomePage extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={250}>
            <div className="logo">
              {
                (!this.state.collapsed) ? <Link to="/home"><img alt='logo' src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png" style={{width: '250px'}}/></Link>
                    : <div className="mt-5"></div>
              }
            </div>

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="sub1" hidden={!data["create-menu"].active} title={<span><Icon type="plus-circle" /><span>CRIAÇÃO</span></span>}>
                <Menu.Item key="2" hidden={!data["create-menu"].pages["batch-assessment-submenu"].active}>
                  <Link to="/home/batch" ><p className="text-white small">Banco de questões</p></Link>
                </Menu.Item>
                <Menu.Item key="3" hidden={!data["create-menu"].pages["test-template-submenu"].active}>
                  <Link to="/home/templatetest" ><p className="text-white small">Modelo de Avaliação</p></Link>
                </Menu.Item>
                <Menu.Item key="4" hidden={!data["create-menu"].pages["question-database-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Questionário</p></Link>
                </Menu.Item>
                <Menu.Item key="5" hidden={!data["create-menu"].pages["question-database-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Questionário</p></Link>
                </Menu.Item>
                <Menu.Item key="6" hidden={!data["create-menu"].pages["my-tasks-submenu"].active}>
                  <Link to="/home/" ><p
                      className="text-white small">Minhas tarefas</p></Link>
                </Menu.Item>
                <Menu.Item key="7" hidden={!data["create-menu"].pages["schedule-group-submenu"].active}>
                  <Link to="/home/" ><p
                      className="text-white small">Grupo de Agendamento</p></Link>
                </Menu.Item>
                <Menu.Item key="8" hidden={!data["create-menu"].pages["all-schedules-submenu"].active}>
                  <Link to="/home/" ><p
                      className="text-white small">Agendamento</p></Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Link to="/home/"><p className="text-white small">Aprovação de agendamento em lote</p></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" hidden={true} title={<span><Icon type="file-text" /><span>PROVA ONLINE</span></span>}>
                <Menu.Item key="10"></Menu.Item>
              </SubMenu>

              <SubMenu key="sub3" hidden={!data["processing-menu"].active} title={<span><Icon type="snippets" /><span>PROCESSAMENTO</span></span>}>
                <Menu.Item key="11" hidden={!data["processing-menu"].pages["all-process-submenu"].active}>
                  <Link to="/home/process/all"><p className="text-white small">Todos os processamentos</p></Link>
                </Menu.Item>
                <Menu.Item key="12" hidden={!data["processing-menu"].pages["image-download-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Auditoria de imagens</p></Link>
                </Menu.Item>
                <Menu.Item key="13" hidden={!data["processing-menu"].pages["search-barcode-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Buscar por código de barras</p></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub4" hidden={!data["correction-menu"].active} title={<span><Icon type="check-circle" /><span>CORREÇÃO</span></span>}>
                <Menu.Item key="14" hidden={!data["correction-menu"].pages["correct-exam-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Correção de avaliação</p></Link>
                </Menu.Item>
                <Menu.Item key="15">
                  <Link to="/home/"><p className="text-white small">Relatório de avaliação</p></Link>
                </Menu.Item>
                <Menu.Item key="16" hidden={!data["correction-menu"].pages["search-candidate-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Buscar por Aluno</p></Link>
                </Menu.Item>
                <Menu.Item key="17" hidden={!data["correction-menu"].pages["search-questions-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Buscar questões aplicadas</p></Link>
                </Menu.Item >
                <Menu.Item key="18" hidden={!data["correction-menu"].pages["questionnarie-report-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Anular Questões</p></Link>
                </Menu.Item>
                <Menu.Item key="19" hidden={!data["correction-menu"].pages["change-score-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Alteração de pontuação</p></Link>
                </Menu.Item>
                <Menu.Item key="20" hidden={!data["correction-menu"].pages["answer-change-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Alteração de gabarito</p></Link>
                </Menu.Item>
                <Menu.Item key="21" hidden={!data["correction-menu"].pages["batch-change-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Alteração de gabarito em lote</p></Link>
                </Menu.Item>
                <Menu.Item key="22" hidden={!data["correction-menu"].pages["appeal-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Requerimentos</p></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub5" hidden={!data["report-menu"].active} title={<span><Icon type="solution" /><span>RELATÓRIOS</span></span>}>
                <Menu.Item key="23">
                  <Link to="/home/"><p className="text-white small">Banco de Questões</p></Link>
                </Menu.Item>
                <Menu.Item key="24" hidden={!data["report-menu"].pages["general-report-einstein"].action}>
                  <Link to="/home/" ><p className="text-white small">Geral</p></Link>
                </Menu.Item>
                <Menu.Item key="25" hidden={!data["report-menu"].pages["category-resultado-submenu"].action}>
                  <Link to="/home/" ><p className="text-white small">Resultado</p></Link>
                </Menu.Item>
                <Menu.Item key="26" hidden={!data["report-menu"].pages["category-external-submenu"].action}>
                  <Link to="/home/" ><p className="text-white small">Externos</p></Link>
                </Menu.Item>
                <Menu.Item key="27" hidden={!data["report-menu"].pages["bi-data-consolidation"].action}>
                  <Link to="/home/" ><p className="text-white small">Consolidação de Dados</p></Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub6" hidden={!data["config-menu"].active} title={<span><Icon type="setting" /><span>CONFIGURAÇÕES</span></span>}>
                <Menu.Item key="28" hidden={!data["config-menu"].pages["academic-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Acadêmicos</p></Link>
                </Menu.Item>
                <Menu.Item key="29" hidden={!data["config-menu"].pages["content-candidate-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Conteúdos</p></Link>
                </Menu.Item>
                <Menu.Item key="30" hidden={!data["config-menu"].pages["place-submenu"].active}>
                  <Link to="/home/place" ><p className="text-white small">Locais</p></Link>
                </Menu.Item>
                <Menu.Item key="31" >
                  <Link to="/home/candidate"><p className="text-white small">Alunos</p></Link>
                </Menu.Item>
                <Menu.Item key="32" hidden={!data["config-menu"].pages["user-group-submenu"].active}>
                  <Link to="/home/" ><p className="text-white small">Usuário</p></Link>
                </Menu.Item>
                <Menu.Item key="33" >
                  <Link to="/home/"><p className="text-white small">Grupo de Usuários</p></Link>
                </Menu.Item>
                <Menu.Item key="34" hidden={!data["config-menu"].pages["import-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Importação de dados</p></Link>
                </Menu.Item>
                <Menu.Item key="35" hidden={!data["config-menu"].pages["academic-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Grupo Empresarial</p></Link>
                </Menu.Item>
                <Menu.Item key="36" >
                  <Link to="/home/"><p className="text-white small">Instruções</p></Link>
                </Menu.Item>
                <Menu.Item key="37" hidden={!data["config-menu"].pages["test-type-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Tipos de Avaliação</p></Link>
                </Menu.Item>
                <Menu.Item key="38" hidden={!data["config-menu"].pages["instruction-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Instruções</p></Link>
                </Menu.Item>
                <Menu.Item key="39" hidden={!data["config-menu"].pages["diff-level-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Grau de dificuldade</p></Link>
                </Menu.Item>
                <Menu.Item key="40" hidden={!data["config-menu"].pages["rule-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Regra</p></Link>
                </Menu.Item>
                <Menu.Item key="41" hidden={!data["config-menu"].pages["related-attr-submenu"].active}>
                  <Link to="/home/"><p className="text-white small">Associar Aluno Conteúdo</p></Link>
                </Menu.Item>
                <Menu.Item key="42" hidden={!data["config-menu"].pages["certificate-list-submenu"].active}>
                  <Link to="/home/"><p
                      className="text-white small">Certificados</p></Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Navbar/>
            <Route exact path={'/home/'} component={Home}/>
            <Route path={`/home/place`} component={Place}/>
            <Route path={`/home/batch`} component={QuestionsBatch}/>
            <Route path={`/home/candidate`} component={Candidate}/>
            <Route path={`/home/create/objective`} component={QuestionsBatchObjective}/>
            <Route path={`/home/create/discursive`} component={QuestionsBatchDiscursive}/>
            <Route path={`/home/process/all`} component={Process}/>
            <Route path={`/home/process/uploadimagesview`} component={UploadImagesView}/>
            <Route path={`/home/process/image/` + this.props.dataProcess} component={ProcessImageValidation}/>
            <Route path={`/home/templatetest/`} component={TemplateTest}/>
          </Layout>
        </Layout>
    );
  }
}


const mapStateToProps = state => {
  return {
    dataProcess: state.ImageProcessReducer.dataProcess,
  }
};

export default connect(mapStateToProps)(InstitutionHomePage);

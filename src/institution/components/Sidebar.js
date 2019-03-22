import React, {Component} from 'react';
import data from '../../API/menu.json';
import {Link} from 'react-router-dom';


class Sidebar extends Component {
  state = {
    activeMenu: 'none',
  }

  hiddenHandler = (menuItem) => {
    let current = this.state.activeMenu;
    if (current === menuItem) this.setState({activeMenu: 'none'})
    else this.setState({activeMenu: menuItem})
  }

  render() {
    return (
        <div className="sidenav">
          <Link to="/home"><img alt='logo'
                                src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png"
                                style={{width: '210px'}}/></Link>
          <nav className="nav flex-column">

            <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('create')}
                 hidden={!data["create-menu"].active}>
              <a className=""><img className="mr-md-2 mb-md-1"
                                   src="https://cdn.starlinetecnologia.com.br/images/menu-criacao.png"/>CRIAÇÃO</a>
              <i className="fa fa-angle-down mr-md-2 mb-md-1"></i>
            </div>
            <div className="ml-md-5 sidebar-items" hidden={!(this.state.activeMenu === 'create')}>
              <Link to="/home/batch" hidden={!data["create-menu"].pages["batch-assessment-submenu"].active}><p
                  className="text-white small">Banco de questões</p></Link>
              <Link to="/home/" hidden={!data["create-menu"].pages["test-template-submenu"].active}><p
                  className="text-white small">Modelo de Avaliação</p></Link>
              <Link to="/home/" hidden={!data["create-menu"].pages["question-database-submenu"].active}><p
                  className="text-white small">Questionário</p></Link>
              <Link to="/home/" hidden={!data["create-menu"].pages["my-tasks-submenu"].active}><p
                  className="text-white small">Minhas tarefas</p></Link>
              <Link to="/home/" hidden={!data["create-menu"].pages["schedule-group-submenu"].active}><p
                  className="text-white small">Grupo de Agendamento</p></Link>
              <Link to="/home/" hidden={!data["create-menu"].pages["all-schedules-submenu"].active}><p
                  className="text-white small">Agendamento</p></Link>
              <Link to="/home/"><p className="text-white small">Aprovação de agendamento em lote</p></Link>
            </div>

            <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('processing')}
                 hidden={!data["processing-menu"].active}>
              <a className=""><img className="mr-md-2 mb-md-1"
                                   src="https://cdn.starlinetecnologia.com.br/images/menu-processamento.png"/>PROCESSAMENTO</a>
              <i className="fa fa-angle-down mr-md-2"></i>
            </div>
            <div className="ml-md-5" hidden={!(this.state.activeMenu === 'processing')}>
              <Link to="/home/process/all"><p className="text-white small"
                                              hidden={!data["processing-menu"].pages["all-process-submenu"].active}>Todos
                os processamentos</p></Link>
              <Link to="/home/"><p className="text-white small"
                                   hidden={!data["processing-menu"].pages["image-download-submenu"].active}>Auditoria de
                imagens</p></Link>
              <Link to="/home/"><p className="text-white small"
                                   hidden={!data["processing-menu"].pages["search-barcode-submenu"].active}>Buscar por
                código de barras</p></Link>
            </div>

            <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('correction')}
                 hidden={!data["correction-menu"].active}>
              <a className=""><img className="mr-md-2 mb-md-1"
                                   src="https://cdn.starlinetecnologia.com.br/images/menu-correcao.png"/>CORREÇÃO</a>
              <i className="fa fa-angle-down mr-md-2"></i>
            </div>
            <div className="ml-md-5" hidden={!(this.state.activeMenu === 'correction')}>
              <Link to="/home/" hidden={!data["correction-menu"].pages["correct-exam-submenu"].active}><p
                  className="text-white small">Correção de avaliação</p></Link>
              <Link to="/home/"><p className="text-white small">Relatório de avaliação</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["search-candidate-submenu"].active}><p
                  className="text-white small">Buscar por Aluno</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["search-questions-submenu"].active}><p
                  className="text-white small">Buscar questões aplicadas</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["questionnarie-report-submenu"].active}><p
                  className="text-white small">Anular Questões</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["change-score-submenu"].active}><p
                  className="text-white small">Alteração de pontuação</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["answer-change-submenu"].active}><p
                  className="text-white small">Alteração de gabarito</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["batch-change-submenu"].active}><p
                  className="text-white small">Alteração de gabarito em lote</p></Link>
              <Link to="/home/" hidden={!data["correction-menu"].pages["appeal-submenu"].active}><p
                  className="text-white small">Requerimentos</p></Link>
            </div>

            <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('')}
                 hidden={!data["report-menu"].active}>
              <a className=""><img className="mr-md-2 mb-md-1"
                                   src="https://cdn.starlinetecnologia.com.br/images/menu-relatorios.png"/>RELATÓRIOS</a>
              <i className="fa fa-angle-down mr-md-2"></i>
            </div>
            <div className="ml-md-5" hidden={!(this.state.activeMenu === '')}>
              <Link to="/home/"><p className="text-white small">Banco de Questões</p></Link>
              <Link to="/home/" hidden={!data["report-menu"].pages["general-report-einstein"].action}><p
                  className="text-white small">Geral</p></Link>
              <Link to="/home/" hidden={!data["report-menu"].pages["category-resultado-submenu"].action}><p
                  className="text-white small">Resultado</p></Link>
              <Link to="/home/" hidden={!data["report-menu"].pages["category-external-submenu"].action}><p
                  className="text-white small">Externos</p></Link>
              <Link to="/home/" hidden={!data["report-menu"].pages["bi-data-consolidation"].action}><p
                  className="text-white small">Consolidação de Dados</p></Link>
            </div>

            <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('config')}
                 hidden={!data["config-menu"].active}>
              <a className=""><img className="mr-md-2 mb-md-1"
                                   src="https://cdn.starlinetecnologia.com.br/images/menu-configuracoes.png"/>CONFIGURAÇÕES</a>
              <i className="fa fa-angle-down mr-md-2"></i>
            </div>
            <div className="ml-md-5" hidden={!(this.state.activeMenu === 'config')}>
              <Link to="/home/" hidden={!data["config-menu"].pages["academic-submenu"].active}><p
                  className="text-white small">Acadêmicos</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["content-candidate-submenu"].active}><p
                  className="text-white small">Conteúdos</p></Link>
              <Link to="/home/place" hidden={!data["config-menu"].pages["place-submenu"].active}><p
                  className="text-white small">Locais</p></Link>
              <Link to="/home/candidate"><p className="text-white small">Alunos</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["user-group-submenu"].active}><p
                  className="text-white small">Usuário</p></Link>
              <Link to="/home/"><p className="text-white small">Grupo de Usuários</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["import-submenu"].active}><p
                  className="text-white small">Importação de dados</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["academic-submenu"].active}><p
                  className="text-white small">Grupo Empresarial</p></Link>
              <Link to="/home/"><p className="text-white small">Instruções</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["test-type-submenu"].active}><p
                  className="text-white small">Tipos de Avaliação</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["instruction-submenu"].active}><p
                  className="text-white small">Instruções</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["diff-level-submenu"].active}><p
                  className="text-white small">Grau de dificuldade</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["rule-submenu"].active}><p
                  className="text-white small">Regra</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["related-attr-submenu"].active}><p
                  className="text-white small">Associar Aluno Conteúdo</p></Link>
              <Link to="/home/" hidden={!data["config-menu"].pages["certificate-list-submenu"].active}><p
                  className="text-white small">Certificados</p></Link>
            </div>

          </nav>
        </div>
    );
  };
};

export default Sidebar;
import React, {Component} from 'react';
import data from '../API/menu.json';

class Sidebar extends Component {
    state = {
        activeMenu: 'none'
    }

    hiddenHandler = (menuItem) => {
        let current = this.state.activeMenu;
        if (current === menuItem) this.setState({activeMenu: 'none'})
        else this.setState({activeMenu: menuItem})
    }

    render() {
        return (
            <div className="sidenav">
                <img alt='logo' src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png" style={{width: '240px'}}/>
                <nav className="nav flex-column">

                        <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('create')} hidden={!data["create-menu"].active}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-criacao.png"/>CRIAÇÃO</a>
                            <i className="fa fa-angle-down mr-md-2 mb-md-1"></i>
                            </div>
                            <div className="ml-md-5" hidden={!(this.state.activeMenu === 'create')}>
                                <p className="text-white small" hidden={!data["create-menu"].pages["batch-assessment-submenu"].active}>Banco de questões</p>
                                <p className="text-white small" hidden={!data["create-menu"].pages["test-template-submenu"].active}>Modelo de Avaliação</p>
                                <p className="text-white small" hidden={!data["create-menu"].pages["question-database-submenu"].active}>Questionário</p>
                                <p className="text-white small" hidden={!data["create-menu"].pages["my-tasks-submenu"].active}>Minhas tarefas</p>
                                <p className="text-white small" hidden={!data["create-menu"].pages["schedule-group-submenu"].active}>Grupo de Agendamento</p>
                                <p className="text-white small" hidden={!data["create-menu"].pages["all-schedules-submenu"].active}>Agendamento</p>
                                <p className="text-white small" >Aprovação de agendamento em lote</p>
                            </div>

                        <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('processing')} hidden={!data["processing-menu"].active}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-processamento.png"/>PROCESSAMENTO</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={!(this.state.activeMenu === 'processing')}>
                            <p className="text-white small" hidden={!data["processing-menu"].pages["all-process-submenu"].active}>Todos os processamentos</p>
                            <p className="text-white small" hidden={!data["processing-menu"].pages["image-download-submenu"].active}>Auditoria de imagens</p>
                            <p className="text-white small" hidden={!data["processing-menu"].pages["search-barcode-submenu"].active}>Buscar por código de barras</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('correction')} hidden={!data["correction-menu"].active}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-correcao.png"/>CORREÇÃO</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={!(this.state.activeMenu === 'correction')}>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["correct-exam-submenu"].active}>Correção de avaliação</p>
                            <p className="text-white small">Relatório de avaliação</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["search-candidate-submenu"].active}>Buscar por Aluno</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["search-questions-submenu"].active}>Buscar questões aplicadas</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["questionnarie-report-submenu"].active}>Anular Questões</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["change-score-submenu"].active}>Alteração de pontuação</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["answer-change-submenu"].active}>Alteração de gabarito</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["batch-change-submenu"].active}>Alteração de gabarito em lote</p>
                            <p className="text-white small" hidden={!data["correction-menu"].pages["appeal-submenu"].active}>Requerimentos</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('')} hidden={!data["report-menu"].active}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-relatorios.png"/>RELATÓRIOS</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={!(this.state.activeMenu === '')}>
                            <p className="text-white small">Banco de Questões</p>
                            <p className="text-white small" hidden={!data["report-menu"].pages["general-report-einstein"].action}>Geral</p>
                            <p className="text-white small" hidden={!data["report-menu"].pages["category-resultado-submenu"].action}>Resultado</p>
                            <p className="text-white small" hidden={!data["report-menu"].pages["category-external-submenu"].action}>Externos</p>
                            <p className="text-white small" hidden={!data["report-menu"].pages["bi-data-consolidation"].action}>Consolidação de Dados</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={() => this.hiddenHandler('config')} hidden={!data["config-menu"].active}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-configuracoes.png"/>CONFIGURAÇÕES</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={!(this.state.activeMenu === 'config')}>
                            <p className="text-white small" hidden={!data["config-menu"].pages["academic-submenu"].active}>Acadêmicos</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["content-candidate-submenu"].active}>Conteúdos</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["place-submenu"].active}>Locais</p>
                            <p className="text-white small">Alunos</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["user-group-submenu"].active}>Usuário</p>
                            <p className="text-white small">Grupo de Usuários</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["import-submenu"].active}>Importação de dados</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["academic-submenu"].active}>Grupo Empresarial</p>
                            <p className="text-white small">Instruções</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["test-type-submenu"].active}>Tipos de Avaliação</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["instruction-submenu"].active}>Instruções</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["diff-level-submenu"].active}>Grau de dificuldade</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["rule-submenu"].active}>Regra</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["related-attr-submenu"].active}>Associar Aluno Conteúdo</p>
                            <p className="text-white small" hidden={!data["config-menu"].pages["certificate-list-submenu"].active}>Certificados</p>
                        </div>

                </nav>
            </div>
        );
    };
};



export default Sidebar;
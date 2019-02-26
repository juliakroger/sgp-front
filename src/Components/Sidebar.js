import React, {Component} from 'react';


class Sidebar extends Component {
    state = {
        criacaoHidden: true,
        processamentoHidden: true,
        correcaoHidden: true,
        relatoriosHidden: true,
        configuracoesHidden: true
    }

    criacaoClickHandler = () => {
        let current = this.state.criacaoHidden;
        this.setState({ criacaoHidden:!current })
    }
    processamentoClickHandler = () => {
        let current = this.state.processamentoHidden;
        this.setState({ processamentoHidden:!current })
    }
    correcaoClickHandler = () => {
        let current = this.state.correcaoHidden;
        this.setState({ correcaoHidden:!current })
    }
    relatoriosClickHandler = () => {
        let current = this.state.relatoriosHidden;
        this.setState({ relatoriosHidden:!current })
    }
    configuracoesClickHandler = () => {
        let current = this.state.configuracoesHidden;
        this.setState({ configuracoesHidden:!current })
    }


    render() {
        return (
            <div className="sidenav">
                <img alt='logo' src="https://strtec.s3.amazonaws.com/demo/logos/f090c20c-7492-11e8-ad59-0242ac11000f_sys_logo.png" style={{width: '240px'}}/>
                <nav className="nav flex-column">

                        <div className="navbar text-white pointer" onClick={this.criacaoClickHandler}>
                                <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-criacao.png"/>CRIAÇÃO</a>
                                <i className="fa fa-angle-down mr-md-2 mb-md-1"></i>
                        </div>
                        <div className="ml-md-5" hidden={this.state.criacaoHidden}>
                            <p className="text-white small">Banco de questões</p>
                            <p className="text-white small">Modelo de Avaliação</p>
                            <p className="text-white small">Questionário</p>
                            <p className="text-white small">Minhas tarefas</p>
                            <p className="text-white small">Grupo de Agendamento</p>
                            <p className="text-white small">Agendamento</p>
                            <p className="text-white small">Aprovação de agendamento em lote</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={this.processamentoClickHandler}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-processamento.png"/>PROCESSAMENTO</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={this.state.processamentoHidden}>
                            <p className="text-white small">Todos os processamentos</p>
                            <p className="text-white small">Auditoria de imagens</p>
                            <p className="text-white small">Buscar por código de barras</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={this.correcaoClickHandler}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-correcao.png"/>CORREÇÃO</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={this.state.correcaoHidden}>
                            <p className="text-white small">Correção de avaliação</p>
                            <p className="text-white small">Relatório de avaliação</p>
                            <p className="text-white small">Buscar por Aluno</p>
                            <p className="text-white small">Buscar questões aplicadas</p>
                            <p className="text-white small">Anular Questões</p>
                            <p className="text-white small">Alteração de pontuação</p>
                            <p className="text-white small">Alteração de gabarito</p>
                            <p className="text-white small">Alteração de gabarito em lote</p>
                            <p className="text-white small">Requerimentos</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={this.relatoriosClickHandler}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-relatorios.png"/>RELATÓRIOS</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={this.state.relatoriosHidden}>
                            <p className="text-white small">Banco de Questões</p>
                            <p className="text-white small">Geral</p>
                            <p className="text-white small">Resultado</p>
                            <p className="text-white small">Externos</p>
                            <p className="text-white small">Consolidação de Dados</p>
                        </div>

                        <div className="navbar text-white pointer" onClick={this.configuracoesClickHandler}>
                            <a className=""><img className="mr-md-2 mb-md-1" src="https://cdn.starlinetecnologia.com.br/images/menu-configuracoes.png"/>CONFIGURAÇÕES</a>
                            <i className="fa fa-angle-down mr-md-2"></i>
                        </div>
                        <div className="ml-md-5" hidden={this.state.configuracoesHidden}>
                            <p className="text-white small">Acadêmicos</p>
                            <p className="text-white small">Conteúdos</p>
                            <p className="text-white small">Locais</p>
                            <p className="text-white small">Alunos</p>
                            <p className="text-white small">Usuário</p>
                            <p className="text-white small">Grupo de Usuários</p>
                            <p className="text-white small">Importação de dados</p>
                            <p className="text-white small">Grupo Empresarial</p>
                            <p className="text-white small">Instruções</p>
                            <p className="text-white small">Tipos de Avaliação</p>
                            <p className="text-white small">Instruções</p>
                            <p className="text-white small">Grau de dificuldade</p>
                            <p className="text-white small">Regra</p>
                            <p className="text-white small">Associar Aluno Conteúdo</p>
                            <p className="text-white small">Certificados</p>
                        </div>

                </nav>
            </div>
        );
    };
};



export default Sidebar;
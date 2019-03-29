import React, {Component} from 'react';
import axios from 'axios';
import {Modal} from "antd";
import TestQuestionsDragable from "./TestQuestionsDragable";


class TemplateTest extends Component {
  state = {
    visible: false,
    name: '',
    sessions: [],
    code: ''
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  componentWillMount() {
    axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/ib/rest/assessment/87e3b480-4f02-11e9-bf3d-0242ac110015/?no_body=1')
        .then(res => {
          this.setState({
            name: res.data.name,
            sessions: res.data.assessmentsession_set,
            code: res.data.code
          })
        })

  }

  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3 className="row">
              <div className="col-xs-12">Editar {this.state.name}</div>
              <div className="state-information col-xs-12 text-right no-pad">
                <p id="add-button" className="btn btn-success mr-1 btn-sm pull-right"
                   onClick={this.showModal}>Configurações</p>
                <p className="btn btn-success mr-1 btn-sm pull-right"><i className="fa fa-plus mr-1"></i>Criar Seção</p>
                <p className="btn btn-success mr-1 btn-sm pull-right"><i className="fa fa-plus mr-1"></i>Adicionar anexo
                </p>
              </div>
            </h3>
          </div>

          <Modal title="Configurações"
                 closable={true}
                 onCancel={this.handleCancel}
                 footer={null}
                 visible={this.state.visible}>
            <form>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="name-input">Nome</span>
                </div>
                <input type="text" className="form-control" aria-describedby="name-input" value={this.state.name}/>
              </div>align-baseline
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="key-input">Chave do parceiro</span>
                </div>
                <input type="text" className="form-control" aria-describedby="key-input" value={this.state.code}/>
              </div>
              <p>Randomização</p>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="questions_check" value="questions"/>
                <label className="form-check-label" htmlFor="questions_check">Questões</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="alternatives_check" value="alternatives"/>
                <label className="form-check-label" htmlFor="alternatives_check">Alternativas</label>
              </div>
              <p className="mt-2">Numeração inicial das questões</p>
              <p id="add-button" className="btn btn-success m-r-12 btn-sm">Salvar configurações</p>
            </form>
          </Modal>
          <div className="row">
            <div className="col">
              <TestQuestionsDragable session={this.state.sessions}/>
            </div>

          </div>
        </div>
    )
  };
}

export default TemplateTest;
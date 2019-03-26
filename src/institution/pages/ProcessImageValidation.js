import React, {Component} from 'react';
import {Progress} from "antd";
import axios from 'axios';
import {connect} from 'react-redux';

class ProcessImageValidation extends Component {
  state = {
    status: '',
    percent: 0
  }

  getValidationPercent = () => {
    setTimeout(() => {
      axios.get( 'https://sgp-homolog.provafacilnaweb.com.br/tasks/' + this.props.dataProcess + '/status/')
        .then(res => {
          console.log(res.data.task)
          let percent = res.data.task.result.progress_percent;
          let status = res.data.task.status;

          if (status === 'SUCCESS'){
            this.setState({status: status, percent: 100})
          }

          else {
            this.getValidationPercent()
            this.setState({status: status, percent: percent})
          }

        })
          .catch(error => console.log(error))
    }, 3000)
  }

  componentWillMount() {
    this.getValidationPercent()
  }

  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3>Validação de Imagens</h3>
          </div>
          <div className="wrapper">
            <div className="card ml-5 mr-5">
              <div className="card-header">
                <p>Nome do processo: {this.props.fileName}</p>
              </div>
              <div className="card-body">
                <p>Processo de verificação de imagens: </p>
                <Progress percent={this.state.percent} showInfo={false}/>
                <div className="row text-center">
                  <div className="col">
                    <p>Detalhe</p>
                    <p>Prova online já processada</p>
                  </div>
                  <div className="col">
                    <p>Pendências/Total</p>
                    <p>1/1</p>
                  </div>
                </div>
                <div className="text-right">
                <button type="button" className="btn btn-outline-info mr-2 btn-sm">Enviar para processar</button>
                </div>
              </div>
            </div>

          </div>
        </div>

    );
  };
};


const mapStateToProps = state => {
  return {
    dataProcess: state.ImageProcessReducer.dataProcess,
    fileName: state.ImageProcessReducer.fileName
  }
};

export default connect(mapStateToProps)(ProcessImageValidation);
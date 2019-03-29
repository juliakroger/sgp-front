import React, {Component} from 'react';
import axios from 'axios';
import {Progress} from 'antd';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/actionsTypes";


class UploadImagesView extends Component {
  state = {
    percent: 0,
    fileName: '',
  };

  processImageWithURL = (keyName) => {
    this.setState({percent: 80});
    let data = {
      name: this.state.fileName,
      url: keyName
    };
    axios.post('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/prs/rest/process_image_with_url/', data)
        .then(res => {
          console.log(res.data)
          let task = res.data.task;
          this.setState({percent: 100});
          this.props.onProcessImage(task);
          this.props.history.push("/home/process/image/" + task);
        })
        .catch(error => console.log(error))
  };

  onURLGet = (url, file, keyName) => {
    this.setState({percent: 40});
    let header = {
      'Content-Type': file.type,
    };
    axios.put(url, file, {headers: header})
        .then(() => {
          this.setState({percent: 70});
          this.processImageWithURL(keyName)
        })
        .catch(error => console.log(error))
  };

  onFileSelect = (e) => {
    let file = this.uploadInput.files[0];
    this.props.onFileLoad(file.name);
    this.setState({fileName: file.name});
    this.setState({percent: 10});
    let data = {
      tag_name: 'process',
      file_name: [file.name],
    };
    axios.post(' https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/rest/getuploadurl/', data)
        .then(res => {
          this.setState({percent: 25});
          this.onURLGet(res.data[0].url, file, res.data[0].key_name)
        })
        .catch(error => console.log(error))
  };

  render() {
    return (
        <div className="content">
          <div className="page-head">
            <h3 className="row">
              <div className="col-xs-12">
                Envio de imagens
              </div>
            </h3>
          </div>
          <div className="mt-3">
            <div className="card ml-5 mr-5">
              <label className="btn btn-info pointer btn-sm" htmlFor='selecao-arquivo'>Selecionar um arquivo</label>
              <input type="file" id='selecao-arquivo' accept="image/*,application/zip" ref={(ref) => {
                this.uploadInput = ref;
              }} onChange={this.onFileSelect}/>
              <ol>
                <li>Você pode selecionar somente uma imagem por vez ou enviar um arquivo compactado</li>
                <li>Tamanho máximo: 2.048 MB</li>
                <li>Extensões Suportadas : JPG, JPEG, ZIP</li>
              </ol>
              <p className="text-center">{this.state.fileName}</p>
              <Progress percent={this.state.percent} showInfo={false}/>
            </div>
          </div>
        </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onProcessImage: (payload) => dispatch({type: actions.ADD_PROCESS_IMAGE, payload: payload}),
    onFileLoad: (payload) => dispatch({type: actions.ADD_FILE_NAME, payload: payload})
  }
};

export default connect(null, mapDispatchToProps)(UploadImagesView);
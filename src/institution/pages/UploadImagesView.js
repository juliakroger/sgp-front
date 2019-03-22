import React, {Component} from 'react';
import axios from 'axios';
import {Progress} from 'antd';


class UploadImagesView extends Component {
  state = {
    loading: true,
    percent: 0,
    fileName: '',
  }

  changeTheLoading = () => {
    let atual = this.state.percent;
    this.setState({percent: atual + 1})
    if (this.state.percent <= 100) {
      setTimeout(this.changeTheLoading, 300)
    }
  }

  onURLGet = (url, file) => {
    console.log(file)
    let header = {
      'Content-Type': file.type,
    }

    axios.put(url, file,{headers: header})
        .then(res => console.log(res))
        .catch(error => console.log(error))
  }

  onFileSelect = (e) => {
    let file = this.uploadInput.files[0];
    this.setState({fileName: file.name})
    let data = {
      tag_name: 'process',
      file_name: [file.name],
    }

    axios.post(' https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/rest/getuploadurl/', data)
        .then(res => this.onURLGet(res.data[0].url, file))
        .catch(error => console.log(error))
  }

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
          <div className="wrapper">
            <div className="card ml-5 mr-5">
              <label className="btn btn-info pointer btn-sm" htmlFor='selecao-arquivo'>Selecionar um arquivo</label>
              <input type="file" id='selecao-arquivo' accept="image/*,application/zip" ref={(ref) => { this.uploadInput = ref; }} onChange={this.onFileSelect}/>
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
};

export default UploadImagesView;
import React, {Component} from 'react';
import {connect} from 'react-redux';


class PlaceForm extends Component {

  render() {
    return (
        <div>
          <label>Grupo empresarial:</label>
          <input type="text" className="form-control form-control-sm" placeholder={this.props.client_group}/>
          <label>Unidade de Negócio:</label>
          <input type="text" className="form-control form-control-sm" placeholder={this.props.client_unit}/>
          <label>Nome:</label>
          <input type="text" className="form-control form-control-sm" placeholder={this.props.name}/>
          <label>Abreviação:</label>
          <input type="text" className="form-control form-control-sm" placeholder={this.props.short_name}/>
          <label>Chave do parceiro:</label>
          <input type="text" className="form-control form-control-sm" placeholder={this.props.legacy_key}/>
          <div className="mt-3 text-center">
            <button type="button" className="btn btn-outline-danger mr-3 btn-sm">Excluir</button>
            <button type="button" className="btn btn-outline-danger mr-3 btn-sm">Inativar</button>
            <button type="button" className="btn btn-outline-info btn-sm">Salvar</button>
          </div>
        </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    client_group: state.localReducer.client_group,
    client_unit: state.localReducer.client_unit,
    name: state.localReducer.name,
    short_name: state.localReducer.short_name,
    legacy_key: state.localReducer.legacy_key
  }
};

export default connect(mapStateToProps)(PlaceForm);
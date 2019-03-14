import React, {Component} from 'react';
import axios from "axios";

class PlaceForm extends Component {
    state = {
        client_group: '',
        client_unit: '',
        name: '',
        short_name: '',
        legacy_key: ''
    }

    componentWillMount() {
        axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/place/ed2cea22-cb06-11e7-bc19-0242ac110022/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d1c5a0ea6a837ea105a9ca3ce5356dace0d27e18'
            }
        })
            .then(response => {
                this.setState({client_group: response.data.client_group})
                this.setState({client_unit: response.data.client_unit})
                this.setState({name: response.data.name})
                this.setState({short_name: response.data.short_name})
                this.setState({legacy_key: response.data.legacy_key})
            })
            .catch(error => console.log(error))
    }


    render(){
        return (
        <div>
            <label>Grupo empresarial:</label>
            <input type="text" className="form-control form-control-sm" placeholder={this.state.client_group}/>
            <label>Unidade de Negócio:</label>
            <input type="text" className="form-control form-control-sm" placeholder={this.state.client_unit}/>
            <label>Nome:</label>
            <input type="text" className="form-control form-control-sm" placeholder={this.state.name}/>
            <label>Abreviação:</label>
            <input type="text" className="form-control form-control-sm" placeholder={this.state.short_name}/>
            <label>Chave do parceiro:</label>
            <input type="text" className="form-control form-control-sm" placeholder={this.state.legacy_key}/>
            <div className="mt-3 text-center">
                <button type="button" className="btn btn-outline-danger mr-3 btn-sm">Excluir</button>
                <button type="button" className="btn btn-outline-danger mr-3 btn-sm">Inativar</button>
                <button type="button" className="btn btn-outline-info btn-sm">Salvar</button>
            </div>
        </div>
        );
    };
};


export default PlaceForm;
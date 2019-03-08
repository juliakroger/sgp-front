import React, {Component} from 'react';
import './pages.css';
import axios from "axios";

const URL = 'https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/candidate/';
class Candidate extends Component {
    componentWillMount() {
        axios.get(URL, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d1c5a0ea6a837ea105a9ca3ce5356dace0d27e18'
            }
        })
            .then(response => console.log(response.data[0]))
            .catch(error => console.log(error))
    }

    render(){
        return (
            <div className="content">
                <div className="page-head">
                    <h3 className="row">
                        <div className="col-xs-12">
                            Alunos
                        </div>
                        <div className="state-information col-xs-12 text-right no-pad">
                            <p onClick={() => alert('clicked')} id="add-button"
                               className="btn btn-success m-r-12 btn-sm pull-right">
                                <i className="fa fa-plus"></i> Adicionar
                            </p>
                        </div>
                    </h3>
                </div>

                <div className="wrapper">
                    <form>
                       <div className="form-row">
                           <div className="col-sm-4">
                             <input className="search-form" type="text" placeholder="Digite algo que deseja encontrar..." />
                           </div>
                           <div>
                             <p className="search-button"><i className="fa fa-search"></i></p>
                           </div>
                       </div>
                    </form>

                    <div className="panel-body allow-scroll-y-mb">
                        <p className="grey-small-text">Página 1 de 4789 registros</p>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm font-13">
                                <thead>
                                <tr>
                                    <th className="col-lg-5 col-md-2 col-sm-4">Nome</th>
                                    <th className="col-lg-2 col-md-1 col-sm-1">Matrícula</th>
                                    <th className="col-lg-2 col-md-1 col-sm-1">Documento de Identificação</th>
                                    <th className="col-lg-2 col-md-1 col-sm-1">Local</th>
                                    <th className="w-100"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2º CONTRATANTE MARCUS</td>
                                    <td>-</td>
                                    <td>06374989686</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>

                                </tr>
                                <tr>
                                    <td>2º CONTRATANTE MARCUS</td>
                                    <td>-</td>
                                    <td>06374989686</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Aarão Valerio</td>
                                    <td>4082119</td>
                                    <td>4082119</td>
                                    <td>CUP MG</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Aarão Valerio</td>
                                    <td>4082119</td>
                                    <td>4082119</td>
                                    <td>CUP MG</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>AARON RUDOLF GAGLIARDI XAVIER</td>
                                    <td>-</td>
                                    <td>00415825946</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>AARON RUDOLF GAGLIARDI XAVIER</td>
                                    <td>-</td>
                                    <td>00415825946</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Aaron Thiago da Silva</td>
                                    <td>-</td>
                                    <td>34471417860</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Aaron Thiago da Silva</td>
                                    <td>-</td>
                                    <td>34471417860</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abdo Michel Domingues Mustafa</td>
                                    <td>-</td>
                                    <td>31436643805</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abdo Michel Domingues Mustafa</td>
                                    <td>-</td>
                                    <td>31436643805</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Almada</td>
                                    <td>4082120</td>
                                    <td>4082120</td>
                                    <td>CUP MG</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Almada</td>
                                    <td>4082120</td>
                                    <td>4082120</td>
                                    <td>CUP MG</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Jose da Silva</td>
                                    <td>-</td>
                                    <td>23872985949</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Jose da Silva</td>
                                    <td>-</td>
                                    <td>23872985949</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>ABEL MACHADO DOS SANTOS NETO</td>
                                    <td>-</td>
                                    <td>40014122847</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>ABEL MACHADO DOS SANTOS NETO</td>
                                    <td>-</td>
                                    <td>40014122847</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>ABEL MACHADO DOS SANTOS NETO</td>
                                    <td>-</td>
                                    <td>40014122847</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>ABEL MACHADO DOS SANTOS NETO</td>
                                    <td>-</td>
                                    <td>40014122847</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Martins Gomes</td>
                                    <td>-</td>
                                    <td>09100376809</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abel Martins Gomes</td>
                                    <td>-</td>
                                    <td>09100376809</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>ABIGAIL DA PENHA MENDES ANDRADE</td>
                                    <td>-</td>
                                    <td>06089114880</td>
                                    <td>-</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abigail Durán</td>
                                    <td>4082123</td>
                                    <td>4082123</td>
                                    <td>Polo Starline</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abigail Granjeiro</td>
                                    <td>4082124</td>
                                    <td>4082124</td>
                                    <td>Polo Starline</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abigail Granjeiro</td>
                                    <td>4082124</td>
                                    <td>4082124</td>
                                    <td>Polo Starline</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                <tr>
                                    <td>Abigail Granjeiro</td>
                                    <td>4082124</td>
                                    <td>4082124</td>
                                    <td>Polo Starline</td>
                                    <td><button type="button" className="btn btn-primary btn-sm">Ações</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
};

export default Candidate;
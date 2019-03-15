import React, { Component } from 'react';
import axios from 'axios';

class QuestionsBatchDiscursive extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/str/rest/contentcascading/')
            .then(res => this.setState({data: res.data.items}))
            .catch(error => console.log(error))
    }

    printDisciplina = (event) => {
        console.log(event)
    }

    render () {
        return (
            <div className="content">
                <div className="page-head">
                    <h3 className="row">
                        <div className="col-xs-12">
                            Criação de questões
                        </div>
                        <div className="state-information text-right">
                            <button type="button" className="btn btn-outline-info mr-2 btn-sm" disabled>Visualizar</button>
                            <button type="button" className="btn btn-outline-info mr-2 btn-sm">Salvar rascunho</button>
                            <button type="button" className="btn btn-outline-info mr-2 btn-sm">Salvar</button>
                        </div>
                    </h3>
                </div>
                <div className="wrapper">
                <div className="row">

                        {
                            this.state.data.map(item => {
                                return (
                                    <div key={item.order} className="col input-group-sm">
                                        <p>{item.name}</p>
                                        <select className="custom-select" id="inputGroupSelect">
                                        <option defaultValue>Selecione</option>
                                            {
                                                item.data.map(value => {
                                                    return <option key={value.key} onClick={this.printDisciplina}>{value.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                )
                            })
                        }



                </div>
                </div>

            </div>
        );
    };
};


export default QuestionsBatchDiscursive;
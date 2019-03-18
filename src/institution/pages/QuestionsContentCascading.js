import React, { Component } from 'react';
import axios from 'axios';

class QuestionsContentCascading extends Component {
    state = {
        data: []
    }

    componentWillMount() {
        axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/str/rest/contentcascading/')
            .then(res => this.setState({data: res.data.items}))
            .catch(error => console.log(error))
    }

    printDisciplina = (event) => {
        let URL = 'https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/str/rest/contentcascading/' + event.target.value;
        axios.get(URL)
            .then(res => {
                res.data.items.map(item => {
                    if(item.data.length > 0) {
                        this.state.data.map(dataItems => {
                            if (dataItems.order === item.order){
                                console.log(dataItems, item)
                            }
                        })
                    }
                })
            })
            .catch(error => console.log(error))
    }

    render () {
        return (
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
                                            return <option key={value.key} value={value.key} onClick={this.printDisciplina}>{value.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        )
                    })
                }
            </div>
        );
    };
};


export default QuestionsContentCascading;
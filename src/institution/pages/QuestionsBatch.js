import React, {Component} from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";

class QuestionsBatch extends Component {
    state = {
        visible: false,
        data: [],
        page: 0
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    componentWillMount() {
        axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/candidate/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d1c5a0ea6a837ea105a9ca3ce5356dace0d27e18'
            }
        })
            .then(response => {
                console.log(response.data)
                this.setState({data: response.data})
            })
            .catch(error => console.log(error))
    }

    paginationHandler = (page) => {
        const goTo = page.target.id;
        console.log(goTo)
    }

    render(){
        return (
            <div className="content">
                <div className="page-head">
                    <h3 className="row">
                        <div className="col-xs-12">
                            Banco de Questões
                        </div>
                        <div className="state-information col-xs-12 text-right no-pad" onClick={this.showModal}>
                            <p id="add-button" className="btn btn-success m-r-12 btn-sm pull-right"><i className="fa fa-plus"></i> Adicionar</p>
                        </div>
                    </h3>
                </div>
                <Modal title="Qual tipo de questão voce deseja cadastrar?"
                    closable={true}
                    onCancel={this.handleCancel}
                    footer={null}
                    visible={this.state.visible}>
                    <div className="text-center">
                        <Link to='/home/create/discursive'><p id="discursive_question" className="btn btn-success m-r-12 pull-right mr-2">Discursiva</p></Link>
                        <Link to='/home/create/objective'><p id="objective-question" className="btn btn-success m-r-12 pull-right">Objetiva</p></Link>
                    </div>
                </Modal>
                <div className="wrapper">

                </div>

            </div>
        );
    };
};

export default QuestionsBatch;
import React, {Component} from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';

class QuestionsBatch extends Component {
    state = {
        visible: false
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

            </div>
        );
    };
};

export default QuestionsBatch;
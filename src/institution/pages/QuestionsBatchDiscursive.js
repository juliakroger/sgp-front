import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import QuestionsContentCascading from "./QuestionsContentCascading";
import CKEditorQuestionDiscursive from './CKEditorQuestionDiscursive';
import CKEditorQuestionObjective from './CKEditorQuestionsObjective';


class QuestionsBatchDiscursive extends Component {
    state = {
        questionsAmount: [
            {id: 1, type: 'discursive'}
        ]
    }

    createQuestions = ({key}) => {
        let id = this.state.questionsAmount.length+1;
        let type = key;
        this.state.questionsAmount.push({id: id, type: type})
        this.forceUpdate()
    }

    render () {
        const menu = (
            <Menu onClick={this.createQuestions}>
                <Menu.Item key="discursive">Discursiva</Menu.Item>
                <Menu.Item key="objective">Objetiva</Menu.Item>
            </Menu>
        );

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
                <QuestionsContentCascading/>
                    <div className="form-group mt-3 bg-light">
                        <div className="form-inline ml-3">
                            <p className="mr-1 mt-3">Grau de dificuldade: </p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                                       value="facil"/>
                                    <label className="form-check-label" htmlFor="facil">Fácil</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                       value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Médio</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                       value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">Difícil</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                       value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">ENADE</label>
                            </div>
                        </div>

                        <div className="form-inline ml-3">
                            <p className="text-info mr-2">Adicionar texto de apoio</p>
                            <Dropdown overlay={menu}>
                                <p className="text-info mr-2 pointer">Adicionar Questão <i className="fa fa-angle-down "/>
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                {
                    this.state.questionsAmount.map(question => {
                        return (
                            <div className="card bg-light ml-2 mt-2" key={question.id}>
                            <div className="card-header">Questão {question.id}</div>
                            <div className="card-body">
                                {
                                    (question.type == 'discursive') ?  <CKEditorQuestionDiscursive />
                                    : <CKEditorQuestionObjective />

                                }

                                <div className="text-right mt-2">
                                    <button type="button" className="btn btn-outline-info mr-2 btn-sm" disabled>Visualizar</button>
                                    <button type="button" className="btn btn-outline-info mr-2 btn-sm">Salvar rascunho</button>
                                    <button type="button" className="btn btn-outline-info mr-2 btn-sm">Salvar</button>
                                </div>
                            </div>

                        </div>
                        );

                    })
                }


            </div>
        );
    };
};


export default QuestionsBatchDiscursive;
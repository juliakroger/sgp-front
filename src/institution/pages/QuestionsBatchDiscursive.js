import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu, Dropdown } from 'antd';
import QuestionsContentCascading from "./QuestionsContentCascading";
import CKEditorQuestionDiscursive from './CKEditorQuestionDiscursive';
import CKEditorQuestionObjective from './CKEditorQuestionsObjective';
import QuestionsCreateButtons from "./QuestionsCreateButtons";
import * as actions from "../../store/actions/actionsTypes";


class QuestionsBatchDiscursive extends Component {
    state = {
        questionsAmount: [
            {id: 1, type: 't', body: '', explain: ''}
        ]
    }

    componentWillMount() {
        this.props.DiscursivePageLoad(this.state.questionsAmount);
    }

    createQuestions = ({key}) => {
        let id = this.state.questionsAmount.length+1;
        let type = key;
        this.state.questionsAmount.push({id: id, type: type, body: '', explain: ''})
        this.forceUpdate()
        this.props.DiscursivePageLoad(this.state.questionsAmount);
    };

    difficultyLevel = (event) => {
        this.props.DifficultySelected(event.target.value)
    }

    render () {
        const addQuestionOptions = (
            <Menu onClick={this.createQuestions}>
                <Menu.Item key="t">Discursiva</Menu.Item>
                <Menu.Item key="o">Objetiva</Menu.Item>
            </Menu>
        );

        return (
            <div className="content">
                <div className="page-head">
                    <h3 className="row">
                        <div className="col-xs-12">
                            Criação de questões
                        </div>
                        <QuestionsCreateButtons/>
                    </h3>
                </div>

                <div className="wrapper">
                <QuestionsContentCascading/>
                    <div className="form-group mt-3 bg-light">
                        <div className="form-inline ml-3">
                            <p className="mr-1 mt-3">Grau de dificuldade: </p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil" value="1" onClick={this.difficultyLevel}/>
                                    <label className="form-check-label" htmlFor="facil">Fácil</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" onClick={this.difficultyLevel}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Médio</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" onClick={this.difficultyLevel}/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">Difícil</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="4" onClick={this.difficultyLevel}/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">ENADE</label>
                            </div>
                        </div>

                        <div className="form-inline ml-3">
                            <p className="text-info mr-2 pointer">Adicionar texto de apoio</p>
                            <Dropdown overlay={addQuestionOptions}>
                                <p className="text-info mr-2 pointer">Adicionar Questão <i className="fa fa-angle-down "/>
                                </p>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                {this.supportText}
                {
                    this.state.questionsAmount.map(question => {
                        return (
                            <div className="card bg-light ml-2 mt-2" key={question.id}>
                            <div className="card-header">Questão {question.id}</div>
                            <div className="card-body">
                                {
                                    (question.type == 't') ?  <CKEditorQuestionDiscursive id={question.id}/>
                                    : <CKEditorQuestionObjective />

                                }
                            </div>
                        </div>
                        );
                    })
                }




            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        questions: state.createQuestionsReducer.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        DiscursivePageLoad: (payload) => dispatch({type: actions.DISCURSIVE_PAGE_LOAD, payload: payload }),
        DifficultySelected: (payload) => dispatch({type: actions.DIFFICULTY_LEVEL_SELECTED, payload: payload})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBatchDiscursive);
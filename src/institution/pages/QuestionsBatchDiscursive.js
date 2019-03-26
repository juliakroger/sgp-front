import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dropdown, Menu} from 'antd';
import QuestionsContentCascading from "./QuestionsContentCascading";
import CKEditorQuestionDiscursive from './CKEditorQuestionDiscursive';
import CKEditorQuestionObjective from './CKEditorQuestionsObjective';
import QuestionsCreateButtons from "./QuestionsCreateButtons";
import * as actions from "../../store/actions/actionsTypes";


class QuestionsBatchDiscursive extends Component {
  state = {
    questionsAmount: [
      {
        key: '',
        type: 't',
        order: 1,
        value: 1,
        body: '',
        explain: '<p>explanation</p>',
        contentassensment_set: '',
        textanswer_set: [{
          key: '',
          use_lines: true,
          explain: '',
          size_limit: 5,
          size_is_lines: true,
          is_text: false,
          is_answer: false,
          body: null
        }]
      }
    ]
  };

  componentWillMount() {
    this.props.DiscursivePageLoad(this.state.questionsAmount);
  }

  createQuestions = ({key}) => {
    let order = this.state.questionsAmount.length + 1;
    let type = key;
    if (type === 't') (
        this.state.questionsAmount.push({
          key: '',
          type: type,
          order: order,
          value: 1,
          body: '',
          explain: '<p>explanation</p>',
          contentassensment_set: '',
          textanswer_set: [{
            key: '',
            use_lines: true,
            explain: '',
            size_limit: 5,
            size_is_lines: true,
            is_text: false,
            is_answer: false,
            body: null
          }]
        })
    );
    else {
      this.state.questionsAmount.push({
        key: '',
        type: type,
        order: order,
        value: 1,
        body: '',
        explain: '<p>explain</p>',
        contentassensment_set: '',
        alternative_set: [
          {
            key: '',
            correct: false,
            order: 1,
            body: '',
            explain: ''
          },
          {
            key: '',
            correct: false,
            order: 2,
            body: '',
            explain: ''
          },
          {
            key: '',
            correct: false,
            order: 3,
            body: '',
            explain: ''
          },
          {
            key: '',
            correct: false,
            order: 4,
            body: '',
            explain: ''
          },
          {
            key: '',
            correct: false,
            order: 5,
            body: '',
            explain: ''
          }
        ]
      })
    }
    this.forceUpdate();
    this.props.DiscursivePageLoad(this.state.questionsAmount);
  };

  difficultyLevel = (event) => {
    this.props.DifficultySelected(event.target.value)
  };

  render() {
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
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil" value="1"
                         onClick={this.difficultyLevel}/>
                  <label className="form-check-label" htmlFor="facil">Fácil</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"
                         onClick={this.difficultyLevel}/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Médio</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"
                         onClick={this.difficultyLevel}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Difícil</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="4"
                         onClick={this.difficultyLevel}/>
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
                  <div className="card bg-light ml-2 mt-2" key={question.order}>
                    <div className="card-header">Questão {question.order}</div>
                    <div className="card-body">
                      {
                        (question.type == 't') ? <CKEditorQuestionDiscursive order={question.order}/>
                            : <CKEditorQuestionObjective order={question.order}/>

                      }
                    </div>
                  </div>
              );
            })
          }


        </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    questions: state.createQuestionsReducer.questions
  }
};

const mapDispatchToProps = dispatch => {
  return {
    DiscursivePageLoad: (payload) => dispatch({type: actions.DISCURSIVE_PAGE_LOAD, payload: payload}),
    DifficultySelected: (payload) => dispatch({type: actions.DIFFICULTY_LEVEL_SELECTED, payload: payload})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsBatchDiscursive);
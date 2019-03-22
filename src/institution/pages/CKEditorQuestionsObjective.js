import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Radio } from 'antd';
import * as actions from "../../store/actions/actionsTypes";
import {connect} from "react-redux";

const RadioGroup = Radio.Group;
class CKEditorObjective extends Component {
    state = {
        body: '',
        order: this.props.order,
        radioValue: 1,
        textAnswer: [
                {
                    key: '',
                    correct: true,
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
        }

    onChange = (e) => {
        this.setState({radioValue: e.target.value});
        this.state.textAnswer.map((awnswer, i) => {
            if (awnswer.order === e.target.value){
                this.state.textAnswer[i].correct = true;
            }
            else {
                this.state.textAnswer[i].correct = false;
            }
        })
        this.props.UpdateAnswerField(this.state.textAnswer, this.state.order)
    }

    render() {
        return (
            <div>
                <p>Enunciado</p>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({body: data})
                        this.props.AddQuestionBody(data, this.state.order)
                    } }
                />

                <p>Selecione a resposta correta:</p>
                <div className="mr-4">
                {
                    this.state.textAnswer.map((awnser, i) => {
                        return (
                            <div className="form-inline mb-2" key={i}>
                                <RadioGroup onChange={this.onChange} value={this.state.radioValue}>
                                    <Radio value={awnser.order}>
                                        {
                                            awnser.order === 1 ? 'A' : awnser.order === 2 ? 'B' : awnser.order === 3 ? 'C' : awnser.order === 4 ? 'D' : 'E'
                                        }
                                        )</Radio>
                                </RadioGroup>
                                <div className="col">
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            this.state.textAnswer[i].body = data;
                                            this.props.UpdateAnswerField(this.state.textAnswer, this.state.order)
                                        } }
                                        />
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddQuestionBody: (body, order) => dispatch({type: actions.ADD_QUESTION_BODY, body: body, order: order }),
        UpdateAnswerField: (textAnswer, order) => dispatch({type: actions.UPDATE_AWNSERS_FIELD, textAnswer: textAnswer, order: order})
    }
}



export default connect(null, mapDispatchToProps)(CKEditorObjective);
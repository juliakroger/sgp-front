import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class QuestionsCreateButtons extends Component {
    cadastrarQuestao = () => {
        console.log(this.props.questions)
        let data = {
            "user_id":"2",
            "id":"",
            "category":"",
            "save_type":"skip_flow",
            "level": this.props.difficultyLevel,
            "workflow_approved":"",
            "workflow_step":"",
            "contentassessment_set": [this.props.content_pk],
            "itemcontent":{
                "key":"",
                "status_review":"",
                "creation_comment":"",
                "support":{
                    "key":"",
                    "body":"",
                    "explain":""
                },
                "command_set":this.props.questions
            },
            "tags":[],
            "type":"x"
        }

        axios.post('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/ib/rest/item/create/', data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    render () {
        return (
            <div className="state-information text-right">
                <button type="button" className="btn btn-outline-info mr-2 btn-sm" disabled>Visualizar</button>
                <button type="button" className="btn btn-outline-info mr-2 btn-sm" disabled>Salvar rascunho</button>
                <button type="button" className="btn btn-outline-info mr-2 btn-sm" onClick={this.cadastrarQuestao}>Salvar</button>
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        content_pk: state.createQuestionsReducer.content_pk,
        difficultyLevel: state.createQuestionsReducer.difficultyLevel,
        questions: state.createQuestionsReducer.questions,
    }
}

export default connect(mapStateToProps)(QuestionsCreateButtons);
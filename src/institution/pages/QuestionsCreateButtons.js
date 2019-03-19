import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

const data =
    {"user_id":"2","id":"","category":"","save_type":"skip_flow","level":1,"workflow_approved":"","workflow_step":"","contentassessment_set":["bb190b32-00c0-11e5-81a9-b8ac6f91c81a"],"itemcontent":{"key":"","status_review":"","creation_comment":"","support":{"key":"","body":"","explain":""},"command_set":[{"key":"","type":"t","order":1,"value":1,"body":"<p>texto da quest&atilde;o</p><p data-f-id=\"pbf\" style=\"text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;\">Powered by <a href=\"https://www.froala.com/wysiwyg-editor?pb=1\" title=\"Froala Editor\">Froala Editor</a></p>","explain":"<p>justificativa da quest&atilde;o</p><p data-f-id=\"pbf\" style=\"text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;\">Powered by <a href=\"https://www.froala.com/wysiwyg-editor?pb=1\" title=\"Froala Editor\">Froala Editor</a></p>","contentassessment_set":"","textanswer_set":[{"key":"","use_lines":true,"explain":"","size_limit":5,"size_is_lines":true,"is_text":false,"is_answer":false,"body":null}]}]},"tags":[],"type":"t"}

class QuestionsCreateButtons extends Component {


    cadastrarQuestao = () => {
        axios.post('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/ib/rest/item/create/',data)
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
        username: state.loginReducer.username,
    }
}

export default connect(mapStateToProps)(QuestionsCreateButtons);
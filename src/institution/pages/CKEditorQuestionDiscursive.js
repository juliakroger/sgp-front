import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/actionsTypes";


class CKEditorDiscursive extends Component {
    state = {
        body: '',
        id: this.props.id
    }

    render() {
        return (
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({body: data})
                        this.props.AddQuestionBody(data, this.state.id)
                    } }
                />
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        AddQuestionBody: (body, id) => dispatch({type: actions.ADD_QUESTION_BODY, body: body, id: id })
    }
}



export default connect(null, mapDispatchToProps)(CKEditorDiscursive);
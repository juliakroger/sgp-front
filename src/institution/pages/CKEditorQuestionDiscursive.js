import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/actionsTypes";


class CKEditorDiscursive extends Component {
    state = {
        body: '',
        order: this.props.order,
    }

    render() {
        return (
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({body: data})
                        this.props.AddQuestionBody(data, this.state.order)
                    } }
                />
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        AddQuestionBody: (body, order) => dispatch({type: actions.ADD_QUESTION_BODY, body: body, order: order })
    }
}



export default connect(null, mapDispatchToProps)(CKEditorDiscursive);
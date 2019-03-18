import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class CKEditorObjective extends Component {
    render() {
        return (
            <div>
                <p>Enunciado</p>
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ editor => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ editor => {
                        console.log( 'Focus.', editor );
                    } }
                />

                <p>Selecione a resposta correta.</p>
                <div className="mr-4">

                    <div className="form-inline">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                                   value="facil"/>
                            <label className="form-check-label" htmlFor="facil">A)</label>
                        </div>
                        <div className="col">
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ editor => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ editor => {
                                    console.log( 'Focus.', editor );
                                } }/>
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                               value="facil"/>
                        <label className="form-check-label" htmlFor="facil">B)</label>
                    </div>
                        <div className="col">
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                                   value="facil"/>
                            <label className="form-check-label" htmlFor="facil">C)</label>
                        </div>
                        <div className="col">
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ editor => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ editor => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                               value="facil"/>
                        <label className="form-check-label" htmlFor="facil">D)</label>
                    </div>
                        <div className="col">
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="facil"
                               value="facil"/>
                        <label className="form-check-label" htmlFor="facil">E)</label>
                    </div>
                        <div className="col">
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ editor => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ editor => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CKEditorObjective;
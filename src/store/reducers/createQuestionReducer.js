import * as actions from '../actions/actionsTypes';

const initialState = {
    questions: [],
    content_pk: '',
    difficultyLevel: null

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_CONTENT_PK:
            return {
                ...state,
                content_pk: action.payload,
            }

        case actions.DISCURSIVE_PAGE_LOAD:
            return {
                ...state,
                questions: action.payload
            }
        case actions.DIFFICULTY_LEVEL_SELECTED:
            return {
                ...state,
                difficultyLevel: action.payload
            }
        case actions.ADD_QUESTION_BODY:
            state.questions[action.id-1].body = action.body;

        default:
            return state;
    }
};

export default reducer;
import { combineReducers } from 'redux';
import localReducer from './localReducer';
import loginReducer from './loginReducer';
import createQuestionsReducer from './createQuestionReducer';

const rootReducer = combineReducers({ localReducer, loginReducer, createQuestionsReducer});

export default rootReducer;


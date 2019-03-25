import {combineReducers} from 'redux';
import localReducer from './localReducer';
import loginReducer from './loginReducer';
import createQuestionsReducer from './createQuestionReducer';
import  ImageProcessReducer from './ImageProcessReducer';

const rootReducer = combineReducers({localReducer, loginReducer, createQuestionsReducer, ImageProcessReducer});

export default rootReducer;


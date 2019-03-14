import { combineReducers } from 'redux';
import localReducer from './localReducer';
import loginReducer from './loginReducer';


const rootReducer = combineReducers({ localReducer, loginReducer });

export default rootReducer;


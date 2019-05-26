import  {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'; // renam reducer to formReducer
import authReducer from './authReducer'
import streanReducer from './streamReducer';

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    streams:streanReducer
});
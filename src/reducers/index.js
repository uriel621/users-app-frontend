import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './auth';

export default combineReducers({
    "users":postReducer,
    "auth":authReducer
})
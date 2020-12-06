import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import groupReducer from './groupReducer';

export default combineReducers({
    usersReducer : usersReducer,
    groupReducer : groupReducer
});
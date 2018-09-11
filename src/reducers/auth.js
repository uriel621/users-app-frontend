import {  CHANGE_AUTH, CHECK_AUTH } from '../actions/types';

export default function(state = false, action){
    if(action.type === CHANGE_AUTH){
        return action.payload;
    }

    else if(action.type === CHECK_AUTH){
        return action.payload;
    }

    else {
        return state;
    }
}
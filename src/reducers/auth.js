import {  CHANGE_AUTH } from '../actions/types';

export default function(state = false, action){
    if(action.type === CHANGE_AUTH){
        console.log(action.type, action.payload)

        return action.payload;
    }

    else {
        return state;
    }
}
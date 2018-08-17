import { FETCH_USERS, NEW_USERS, DELETE_USERS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    if(action.type === FETCH_USERS){
        return {
            ...state,
            "items": action.payload
        };
    }
    
    else if(action.type === NEW_USERS){
        return {
            ...state,
            "items": action.payload
        };
    }

    else if(action.type === DELETE_USERS){
        return {
            ...state,
            "items": action.payload
        };
    }

    else {
        return state;
    }
}
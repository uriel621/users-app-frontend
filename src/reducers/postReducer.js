import { FETCH_USERS, FETCH_USER, NEW_USERS, DELETE_USERS } from '../actions/types';

const initialState = {
    items: [],
    user: {}
}

export default function(state = initialState, action){
    if(action.type === FETCH_USERS){
        return {
            ...state,
            "items": action.payload
        };
    }

    if(action.type === FETCH_USER){
        return {
            ...state,
            "user": action.payload
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
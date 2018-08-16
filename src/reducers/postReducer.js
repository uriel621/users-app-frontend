import { FETCH_USERS, NEW_POSTS } from '../actions/types';

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
    else {
        return state;
    }
}
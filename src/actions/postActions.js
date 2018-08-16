import { FETCH_USERS, NEW_POSTS } from './types';
import Axios from 'axios';

export const fetchUsers = () => dispatch => {
        Axios.get('https://shielded-mesa-72796.herokuapp.com/users')
            .then( (response) => {
                dispatch({
                    "type":FETCH_USERS,
                    "payload":response.data.users
                })
            })
                
            .catch((error) => {
                console.log(error);
            })

}
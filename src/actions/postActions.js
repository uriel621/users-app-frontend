import { FETCH_USERS, NEW_USERS, DELETE_USERS } from './types';
import Axios from 'axios';

export const fetchUsers = () => dispatch => {
    Axios.get('http://localhost:4000/users')
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

export const createUser = (userData) => dispatch => {
    Axios.post('http://localhost:4000/create', userData)
        .then(function (response) {
            dispatch({
                "type":NEW_USERS,
                "payload":response.data.users
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const deleteUser = (userData) => dispatch => {
    Axios.post('http://localhost:4000/delete', userData)
        .then(function (response) {
            dispatch({
                "type":DELETE_USERS,
                "payload":response.data.users
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
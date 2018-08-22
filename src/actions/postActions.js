import { FETCH_USERS, FETCH_USER, UPDATE_USER, NEW_USERS, DELETE_USERS } from './types';
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

export const fetchUser = (username) => dispatch => {
    Axios.get(`http://localhost:4000/edit/${ username }`)
        .then( (response) => {
            // console.log(response.data)
            dispatch({
                "type":FETCH_USER,
                "payload":response.data
            })
        })           
        .catch((error) => {
            console.log(error);
        })
}

export const updateUser = (userData) => dispatch => {
    console.log(userData)
    Axios.post('http://localhost:4000/update', userData)
        .then(function (response) {
            console.log('POST', response.data)
            dispatch({
                "type":UPDATE_USER,
                "payload":response.data.users
            })
        })
        .catch(function (error) {
            console.log(error);
        });
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
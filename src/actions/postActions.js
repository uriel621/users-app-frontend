import { FETCH_USERS, FETCH_USER, UPDATE_USER, NEW_USERS, DELETE_USERS, CHANGE_AUTH } from './types';
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

export const fetchUser = (username) => dispatch => {
    Axios.get(`https://shielded-mesa-72796.herokuapp.com/edit/${ username }`)
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
    Axios.post('https://shielded-mesa-72796.herokuapp.com/update', userData)
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
    Axios.post('https://shielded-mesa-72796.herokuapp.com/create', userData)
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
    Axios.post('https://shielded-mesa-72796.herokuapp.com/delete', userData)
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

export const change_auth = (logged_in) => dispatch => {
    // return {
    //     "type":CHANGE_AUTH,
    //     "payload":logged_in   
    // }
    dispatch({
        "type":CHANGE_AUTH,
        "payload":logged_in
    })
}
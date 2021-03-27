import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId) =>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        token:token,
        userId:userId
    }
}

export const authFail = (error) =>{
    return{
        type:actionTypes.AUTH_FAIL
    }
}
export const authLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeOut = (expirationTime) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(authLogout())
        },expirationTime * 1000)
    }
}

export const authentication = (email,password) =>{
    return dispatch =>{
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        dispatch(authStart())
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmsv6WfGVZB_hP7AczU6OIYgm1tyYJls8';
        axios.post(url,authData)
        .then(response =>{
            const expTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('expirationTime',expTime);
            localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(err=>{
            dispatch(authFail(err.response.data.error));
        })
    }
}
export const setAuthRedirectPath = path =>{
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authStatusCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(authLogout());
        }
        else{
            const expirationTime = new Date( localStorage.getItem('expirationTime'));
            const userId = localStorage.getItem('userId');
            if(expirationTime <= new Date()){dispatch(authLogout());}
            else{
                dispatch(authSuccess(token,userId));
                const exTime = (expirationTime.getTime()-new Date().getTime())%1000;
                //console.log(exTime);
                dispatch(checkAuthTimeOut(exTime));
            }
        }
    }
}
import * as actionTypes from '../actions/actionTypes';
const immutableStateChange = (old,newState) =>{
    return{
        ...old,
        ...newState
    }
}
const initialState = {
    token: null,
    userId: null,
    error: null,
    authRedirectingPath:"/"
}
const  authStart = (state,action) =>{
    return immutableStateChange(state,{error:null})
}

const authSuccess = (state,action) =>{
    return immutableStateChange(state,{
        token: action.idToken,
        userId: action.userId,
        error: null,
    })
}
const authFail = (state,action) =>{
    return immutableStateChange(state,{
        error:action.error,
    });
}

const authLogout =(state,action)=>{
    return immutableStateChange(state,{
        token: null,
        userId: null
    })
}

const setAuthRedirectPath = (state,action) =>{
    return immutableStateChange(state,{authRedirectPath:action.path});
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) { 
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:return setAuthRedirectPath(state,action)
        default:
            return state;
    }
};

export default reducer;
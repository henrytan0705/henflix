import * as UserAPIUtil from '../utils/user_api_utils';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOG_OUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = user => {
    return { 
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const recieveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})


//////////////////////////Thunk actions///////////////////////////

export const signup = user => dispatch => {
    return UserAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const login = user => dispatch => {
    debugger
    return UserAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        // .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logout = () => dispatch => {
    return UserAPIUtil.logout()
        .then(() => dispatch(logoutUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}
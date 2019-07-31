import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const sessionReducers = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return new Array;
        case RECEIVE_ERRORS:
            return [].concat(action.errors);
        default: 
            return state;
    }
}

export default sessionReducers;
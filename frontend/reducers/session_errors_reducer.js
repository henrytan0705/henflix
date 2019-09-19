import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducers = (state = [], action) => {
    Object.freeze(state);
    // debugger    
    switch (action.type) {
        case RECEIVE_ERRORS:{
            // return merge({}, action.errors);
            // return merge({}, { ["errors"]: action.errors });
            return [].concat(action.errors);
        }
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_ERRORS:
            return [];
        default: 
            return state;
    }
}

export default sessionErrorsReducers;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import { merge } from 'lodash'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
    
            let {user} = action;
            return merge({}, {[user.id]: user});
        default: 
    
            return state;
    }
}

export default usersReducer;
import { RECEIVE_LIST, CLEAR_LIST } from '../actions/ui_actions';
import { merge } from 'lodash';

const myListReducer = (state = {fetched: false}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIST:
            return merge({fetched: true}, action.list)
        case CLEAR_LIST:
            return {fetched: false};
        default:
            return state;
    }
}

export default myListReducer;
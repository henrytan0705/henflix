import { SEARCHING_FOR_VIDEOS} from '../actions/ui_actions';
import { merge } from 'lodash';

const searchingReducer = (state = {status: false, query: ""}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SEARCHING_FOR_VIDEOS: 
        // debugger
            return merge({}, {status: action.status, query: action.query})
        default:
            return state;
    }
}

export default searchingReducer;
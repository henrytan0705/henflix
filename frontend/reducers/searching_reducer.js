import { SEARCHING_FOR_VIDEOS} from '../actions/ui_actions';
import { merge } from 'lodash';

const searchingReducer = (state = {status: false}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SEARCHING_FOR_VIDEOS: 
            return merge({}, {status: action.query})
        default:
            return state;
    }
}

export default searchingReducer;
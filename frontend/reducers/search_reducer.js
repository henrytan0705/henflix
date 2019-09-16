import { SEARCH_VIDEOS } from '../actions/ui_actions';
import { merge } from 'lodash';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SEARCH_VIDEOS:
            // debugger
            return merge({}, action.videos);
        default: 
            return state;
    }
}


export default searchReducer;
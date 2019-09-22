import { RECEIVE_VIDEOS, SEARCH_VIDEOS} from '../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEOS:
            return merge({}, action.videos);
        default:
            return state;
    }
}

export default videosReducer;
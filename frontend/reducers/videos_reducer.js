import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_GENRE_VIDEOS} from '../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEOS:
            return merge({}, action.videos);
        case RECEIVE_VIDEO:
            return merge({}, { [action.video.id]: action.video});
        // case RECEIVE_GENRE_VIDEOS:
        //     return merge({}, state, action.videos);
        default:
            return state;
    }
}

export default videosReducer;
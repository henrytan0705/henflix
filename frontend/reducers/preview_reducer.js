import { RECEIVE_VIDEO, CLEAR_VIDEO, RECEIVE_CURRENT_VIDEO } from '../actions/video_actions';
import { merge } from 'lodash'

const previewReducer = (state = {}, action) => {
    Object.freeze(state);
// debugger
    switch (action.type) {
        case RECEIVE_CURRENT_VIDEO:
        // debugger
            return merge({}, action.video.id, action.preview);
        case RECEIVE_VIDEO:
            return merge({}, action.video);
        case CLEAR_VIDEO:
            return merge({}, action.preview);
        default:
            return state;
    }
}

export default previewReducer;
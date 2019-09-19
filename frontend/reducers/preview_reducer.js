import { RECEIVE_VIDEO } from '../actions/video_actions';
import { CLEAR_VIDEO, RECEIVE_CURRENT_VIDEO } from '../actions/ui_actions';
import { merge } from 'lodash'

const previewReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_VIDEO:
        // debugger
            // return merge({}, {id: action.video.id, status: action.preview});
            return merge({}, {id: action.video.id, status: action.preview, currentTime: action.time});
        case RECEIVE_VIDEO:
            return merge({}, action.video);
        case CLEAR_VIDEO:
            return merge({}, action.preview);
        default:
            return {};
    }
}

export default previewReducer;
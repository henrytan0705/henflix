import { RECEIVE_CURRENT_DESCRIPTION } from '../actions/video_actions';
import { merge } from 'lodash';

const descriptionReducer = (state = {}, action) => {
    Object.freeze(state);

    debugger 
    switch(action.type) {
        case RECEIVE_CURRENT_DESCRIPTION:
            debugger
            return merge({}, action.video.id)
        default: 
            return state;
    }
}

export default descriptionReducer;
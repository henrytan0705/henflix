import { RECEIVE_CURRENT_DESCRIPTION, CLEAR_DESCRIPTION } from '../actions/video_actions';
import { merge } from 'lodash';

const descriptionReducer = (state = {}, action) => {
    Object.freeze(state);

    // debugger 
    switch(action.type) {
        case RECEIVE_CURRENT_DESCRIPTION:
            // debugger
            return merge({}, {id: action.video.id})
        case CLEAR_DESCRIPTION:
            return {};
        default: 
            return state;
    }
}

export default descriptionReducer;
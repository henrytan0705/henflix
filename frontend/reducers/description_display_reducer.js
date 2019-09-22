import { RECEIVE_CURRENT_DESCRIPTION, CLEAR_DESCRIPTION } from '../actions/ui_actions';
import { merge } from 'lodash';

const descriptionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_DESCRIPTION:
            return merge({}, {id: action.video.id})
        case CLEAR_DESCRIPTION:
            return {};
        default: 
            return state;
    }
}

export default descriptionReducer;
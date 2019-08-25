import { RECEIVE_GENRES } from '../actions/video_actions';
import { merge } from 'lodash';

const genresReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_GENRES:
            return merge({}, action.genres);
        default:
            return state;
    }
}

export default genresReducer;
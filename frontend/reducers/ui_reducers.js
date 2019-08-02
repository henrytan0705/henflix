import { CHECK_URL } from '../actions/ui_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case CHECK_URL:
            return {};
        default:
            return state;
    }
}

export default uiReducer;
import { combineReducers } from 'redux';
import previewReducer from './preview_reducer';
import descriptionReducer from './description_display_reducer';

const uiReducer = combineReducers({
    preview: previewReducer,
    description: descriptionReducer,
})

export default uiReducer;
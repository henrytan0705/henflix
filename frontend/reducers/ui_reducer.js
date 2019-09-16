import { combineReducers } from 'redux';
import previewReducer from './preview_reducer';
import descriptionReducer from './description_display_reducer';
import searchReducer from './search_reducer';

const uiReducer = combineReducers({
    preview: previewReducer,
    description: descriptionReducer,
    searchResults: searchReducer
})

export default uiReducer;
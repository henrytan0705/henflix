import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import genresReducer from './genres_reducer';
// import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    genres: genresReducer,
    // searchResults: searchReducer
})

export default entitiesReducer;
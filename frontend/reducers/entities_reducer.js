import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import genresReducer from './genres_reducer';
import myListReducer from './my_list_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    genres: genresReducer,
    myList: myListReducer
})

export default entitiesReducer;
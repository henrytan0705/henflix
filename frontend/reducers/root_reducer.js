import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './sessions_reducer';
import errors_reducer from './errors_reducer';
import videosReducer from './videos_reducer';
import videoPlayerReducer from './video_player_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer, 
    session: sessionsReducer,
    errors: errors_reducer,
    videos: videosReducer,
    videoPlayer: videoPlayerReducer
});

export default rootReducer;
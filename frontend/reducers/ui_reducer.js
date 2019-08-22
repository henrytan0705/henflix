import { combineReducers } from ' redux';
import videoPlayerReducer from './video_player_reducer';

const uiReducer = combineReducers({
    videoPlayer: videoPlayerReducer
})

export default uiReducer;
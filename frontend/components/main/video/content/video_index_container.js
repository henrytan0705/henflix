import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { retrieveVideos, retrieveGenreVideos, clearCurrentVideo, clearDescription } from '../../../../actions/video_actions';

const msp = state => {
    return {
        // videos: state.videos,
        previewVideoId : Object.keys(state.ui).length
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        clearCurrentVideo: () => dispatch(clearCurrentVideo()),
        clearDescription: () => dispatch(clearDescription()),
        
        // retrieveGenreVideos: (id) => dispatch(retrieveGenreVideos(id)),
    }   
}

export default connect(msp, mdp)(VideoIndex);
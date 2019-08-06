import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { retrieveVideos, retrieveGenreVideos } from '../../../../actions/video_actions';

const msp = state => {
    return {
        // videos: state.videos,
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        // retrieveGenreVideos: (id) => dispatch(retrieveGenreVideos(id)),
    }   
}

export default connect(msp, mdp)(VideoIndex);
import { connect } from 'react-redux';
import { retrieveVideo, retrieveVideos } from '../../../../actions/video_actions';
import VideoDisplay from './video_display';

const msp = state => {
    return {
        // video: state.videos[18],
    }
}

const mdp = dispatch => {
    return {
        // retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp, mdp)(VideoDisplay);
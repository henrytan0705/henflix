import { connect } from 'react-redux';
import { retrieveVideo, retrieveVideos } from '../../../../actions/video_actions';
import VideoDisplay from './video_display';

const msp = state => {
    return {
        video: state.videos[3],
        // video: state.videos.first
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp, mdp)(VideoDisplay);
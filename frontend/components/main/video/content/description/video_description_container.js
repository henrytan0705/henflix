import { connect } from 'react-redux';
import VideoDescription from './video_description.jsx';
// import { withRouter } from 'react-router-dom';
import { retrieveVideo, clearCurrentVideo, receiveCurrentVideo, receiveCurrentDescription, clearDescription } from '../../../../../actions/video_actions';

const msp = (state, ownProps) => {
    return {
        // path: ownProps.match.params.id
        // previewVideoId: Object.keys(state.ui).length
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: id => dispatch(retrieveVideo(id)),
        clearCurrentVideo: (video, preview) => dispatch(clearCurrentVideo(video, preview)),
        receiveCurrentVideo: (video, preview ) => dispatch(receiveCurrentVideo(video, preview)),
        receiveCurrentDescription: video => dispatch(receiveCurrentDescription(video)),
        clearDescription: () => dispatch(clearDescription()),

    }
}

export default connect(msp, mdp)(VideoDescription);
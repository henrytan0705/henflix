import { connect } from 'react-redux';
// import { retrieveVideo, retrieveVideos } from '../../../../actions/video_actions';
import VideoDisplay from './video_display';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    // debugger
    return {
        // video: state.videos[18],
        // path: ownProps.location.pathname
        previewVideoId: Object.keys(state.ui).length
    }
}

const mdp = dispatch => {
    return {
        // retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        // retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default withRouter(connect(msp, mdp)(VideoDisplay));
import VideoPlayer from './video_player';
import { connect } from 'react-redux';
import { retrieveVideo } from '../../../../actions/video_actions';
import { clearCurrentVideo } from '../../../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        path: ownProps.match.params.id,
        currentUser: state.session.userId,
        video: Object.values(state.ui.preview)[0]
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: () => dispatch(clearCurrentVideo())
    }
}



export default withRouter(connect(msp, mdp)(VideoPlayer));
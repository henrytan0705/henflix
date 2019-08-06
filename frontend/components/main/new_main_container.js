import { connect } from 'react-redux';
import Main from './main';
import { retrieveVideos } from '../../actions/video_actions';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId),
        videos: state.videos
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp,mdp)(Main);
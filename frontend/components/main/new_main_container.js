import { connect } from 'react-redux';
import Main from './main';
import { retrieveVideos, retrieveGenres } from '../../actions/video_actions';

const msp = state => {
    return {
        loggedIn: Boolean(state.session.userId),
        videos: state.entities.videos
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        retrieveGenres: () => dispatch(retrieveGenres())
    }
}

export default connect(msp,mdp)(Main);
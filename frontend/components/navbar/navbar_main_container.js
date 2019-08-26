import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { retrieveGenres } from '../../actions/video_actions';

const msp = state => {
    return {
        currentUser: state.session.userId,
        url: "main",
        genres: Object.values(state.entities.genres)
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        retrieveGenres: () => dispatch(retrieveGenres())
    }
}

export default connect(msp, mdp)(Navbar);
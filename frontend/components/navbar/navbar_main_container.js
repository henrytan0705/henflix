import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { retrieveGenres } from '../../actions/video_actions';
import { retrieveSearch, searchingForVideos } from '../../actions/ui_actions';

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
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveSearch: query => dispatch(retrieveSearch(query)),
        searchingForVideos: query => (dispatch(searchingForVideos(query)))
    }
}

export default connect(msp, mdp)(Navbar);
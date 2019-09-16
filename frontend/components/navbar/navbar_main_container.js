import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { retrieveGenres } from '../../actions/video_actions';
import { retrieveSearch, searchingForVideos } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    // debugger
    return {
        currentUser: state.session.userId,
        url: "main",
        genres: Object.values(state.entities.genres),
        history: ownProps.history,
        search: state.ui.searching.query
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveSearch: query => dispatch(retrieveSearch(query)),
        searchingForVideos: (status, query) => (dispatch(searchingForVideos(status, query)))
    }
}

export default withRouter(connect(msp, mdp)(Navbar));
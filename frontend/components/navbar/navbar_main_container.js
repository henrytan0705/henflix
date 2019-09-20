import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { retrieveGenres } from '../../actions/video_actions';
import { retrieveSearch, searchingForVideos, clearDescription } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.userId,
        url: "main",
        genres: Object.values(state.entities.genres),
        history: ownProps.history,
        search: ownProps.match.params.query,
        path: ownProps.match.path,
        query: state.ui.searching.query,
        descriptionOpen: Object.keys(state.ui.description).length
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveSearch: query => dispatch(retrieveSearch(query)),
        searchingForVideos: (status, query) => (dispatch(searchingForVideos(status, query))),
        clearDescription: () => dispatch(clearDescription()),
    }
}

export default withRouter(connect(msp, mdp)(Navbar));
import { connect } from 'react-redux';
import Main from './main';
import { retrieveVideos, retrieveGenres } from '../../actions/video_actions';
import { retrieveList } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';


const msp = (state, ownProps) => {
    return {
        loggedIn: Boolean(state.session.userId),
        videos: state.entities.videos,
        path: ownProps.location.pathname.split('/'),
        genres: state.entities.genres,
        search: state.ui.searching,
        userId: state.session.userId,
        myList: state.entities.myList
        // myList: Object.values(state.entities.users)[0].list
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveList: () => dispatch(retrieveList())
    }
}

export default withRouter(connect(msp,mdp)(Main));
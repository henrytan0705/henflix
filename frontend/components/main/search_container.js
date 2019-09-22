import { connect } from 'react-redux';
import Search from './search';
import { retrieveVideos, retrieveGenres } from '../../actions/video_actions'
import { retrieveSearch } from '../../actions/ui_actions';

const msp = state => {
    return {
        currentUser: state.session.userId,
        searchStatus: state.ui.searching,
        searchResults: state.ui.searchResults,
        videos: state.entities.videos,
        genres: state.entities.genres
        
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveSearch: query => dispatch(retrieveSearch(query))
    }
}

export default connect(msp, mdp)(Search);
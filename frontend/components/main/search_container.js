import { connect } from 'react-redux';
import Search from './search';
import { retrieveGenres } from '../../actions/video_actions'
import { retrieveSearch } from '../../actions/ui_actions';

const msp = state => {
    // const videos = entities.videos;
    // const genres = entities.genres;

    return {
        currentUser: state.session.userId,
        searchStatus: state.ui.searching,
        searchResults: state.ui.searchResults,
        // type: "Search",
        // videos,
        genres: state.entities.genres
        
    }
}

const mdp = dispatch => {
    return {
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveSearch: query => dispatch(retrieveSearch(query))
    }
}

export default connect(msp, mdp)(Search);
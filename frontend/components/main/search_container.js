import { connect } from 'react-redux';
import Search from './search';
import { retrieveSearch } from '../../actions/video_actions';

const msp = state => {
    const videos = entities.videos;
    const genres = entities.genres;

    return {
        currentUser: state.session.userId,
        type: "Search",
        videos,
        genres
        
    }
}

const mdp = dispatch => {
    return {
        retrieveSearch: query => dispatch(retrieveSearch(query))
    }
}

export default connect(msp, mdp)(Search);
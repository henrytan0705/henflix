import { connect } from 'react-redux';
import MyList from './my_list';
import { retrieveVideos, retrieveGenres } from '../../actions/video_actions';
// import { retrieveList } from '../../actions/ui_actions';

const msp = state => {
    // debugger
    return {
        videos: state.entities.videos,
        genres: state.entities.genres,
        // myList: state.entities.users.list,
        myList: Object.values(state.entities.users)[0],
        userId: state.session.userId
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        // retrieveList: () => dispatch(retrieveList())
    }
}

export default connect(msp, mdp)(MyList);
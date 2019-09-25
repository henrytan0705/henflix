import { connect } from 'react-redux';
import MyList from './my_list';
import { retrieveVideos, retrieveGenres } from '../../actions/video_actions';
import { retrieveList } from '../../actions/ui_actions';

const msp = state => {
    return {
        videos: state.entities.videos,
        genres: state.entities.genres,
        myList: state.entities.myList,
        listVideos: state.entities.myList,
        userId: state.session.userId
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        retrieveGenres: () => dispatch(retrieveGenres()),
        retrieveList: (id) => dispatch(retrieveList(id))
    }
}

export default connect(msp, mdp)(MyList);
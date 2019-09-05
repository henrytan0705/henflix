import { connect } from 'react-redux'
import { retrieveVideo, clearCurrentVideo } from '../../../../actions/video_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    return {
        // video: state.videos[2],
        // videos: state.videos
        // genre: ""
        previewVideoId: Object.keys(state.ui).length
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: () => dispatch(clearCurrentVideo())
        // retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp, mdp)(VideoIndexItem);
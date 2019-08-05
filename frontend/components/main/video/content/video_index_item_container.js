import { connect } from 'react-redux'
import { retrieveVideo, retrieveVideos } from '../../../../actions/video_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    return {
        video: state.videos[2],
        videos: state.videos
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        retrieveVideos: () => dispatch(retrieveVideos())
    }
}

export default connect(msp, mdp)(VideoIndexItem);
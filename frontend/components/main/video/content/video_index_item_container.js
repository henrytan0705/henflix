import { connect } from 'react-redux'
import { retrieveVideo, clearCurrentVideo, receiveCurrentVideo } from '../../../../actions/video_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    // debugger
    return {
        previewVideoId: Object.keys(state.ui).length
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: () => dispatch(clearCurrentVideo()),
        // receiveCurrentVideo: (id) => dispatch(receiveCurrentVideo(id))
    }
}

export default connect(msp, mdp)(VideoIndexItem);
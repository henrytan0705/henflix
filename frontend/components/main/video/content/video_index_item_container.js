import { connect } from 'react-redux'
import { retrieveVideo, clearCurrentVideo, receiveCurrentVideo } from '../../../../actions/video_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    // debugger
    return {
        previewVideoId: Object.keys(state.ui).length,
        // previewBool: Object.keys(state.ui).length ? state.ui[Object.keys(state.ui)[0]]["preview"] : false
        previewBool: state.ui.preview 
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: (preview) => dispatch(clearCurrentVideo(preview)),
        receiveCurrentVideo: (video, preview) => dispatch(receiveCurrentVideo(video, preview))
    }
}

export default connect(msp, mdp)(VideoIndexItem);
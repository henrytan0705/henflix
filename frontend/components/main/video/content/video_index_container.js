import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { retrieveVideos } from '../../../../actions/video_actions';
import { clearCurrentVideo, clearDescription } from '../../../../actions/ui_actions';

const msp = state => {
    return {
        componentType: "main",
        description: state.ui.description
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos()),
        clearCurrentVideo: () => dispatch(clearCurrentVideo()),
        clearDescription: () => dispatch(clearDescription()),
    }   
}

export default connect(msp, mdp)(VideoIndex);
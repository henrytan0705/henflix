import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { retrieveVideos } from '../../../../actions/video_actions';

const msp = state => {
    debugger
    return {
        videos: state.videos
    }
}

const mdp = dispatch => {
    return {
        retrieveVideos: () => dispatch(retrieveVideos())
    }   
}

export default connect(msp, mdp)(VideoIndex);
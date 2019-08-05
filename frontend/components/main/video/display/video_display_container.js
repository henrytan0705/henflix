import { connect } from 'react-redux';
import { retrieveVideo } from '../../../../actions/video_actions';
import VideoDisplay from './video_display';

const msp = state => {
    return {
        video: state.videos[2] 
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id))
    }
}

export default connect(msp, mdp)(VideoDisplay);
import { connect } from 'react-redux';
import VideoDescription from './video_description.jsx';


const msp = state => {
    // debugger
    return {
        video: Object.values(state.videoPlayer)[0]
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(VideoDescription);
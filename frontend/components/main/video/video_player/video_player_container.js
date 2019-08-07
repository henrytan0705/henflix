import VideoPlayer from './video_player';
import { connect } from 'react-redux';


const msp = state => {
    return {
        currentUser: state.session.userId,
        video: Object.values(state.videoPlayer)[0]
    }
}

const mdp = dispatch => {
    return {

    }
}



export default connect(msp, mdp)(VideoPlayer);
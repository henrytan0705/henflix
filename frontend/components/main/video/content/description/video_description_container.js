import { connect } from 'react-redux';
import VideoDescription from './video_description.jsx';
import { withRouter } from 'react-router-dom';
import { retrieveVideo } from '../../../../../actions/video_actions';

const msp = (state, ownProps) => {
    return {
        // path: ownProps.match.params.id
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: id => dispatch(retrieveVideo(id))
    }
}

export default connect(msp, mdp)(VideoDescription);
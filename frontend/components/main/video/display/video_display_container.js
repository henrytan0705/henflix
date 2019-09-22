import { connect } from 'react-redux';
import VideoDisplay from './video_display';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
    return {
        descriptionOpen: Object.keys(state.ui.description).length,
        previewVideo: state.ui.preview
    }
}

const mdp = dispatch => {
    return {

    }
}

export default withRouter(connect(msp, mdp)(VideoDisplay));
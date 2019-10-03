import { connect } from 'react-redux';
import VideoDescription from './video_description.jsx';
import { retrieveVideo } from '../../../../../actions/video_actions';
import { clearCurrentVideo, receiveCurrentVideo, receiveCurrentDescription, clearDescription, retrieveList, addToList, removeFromList } from '../../../../../actions/ui_actions';

const msp = state => {
    return {
        currentDescription: state.ui.description,
        previewVideo: state.ui.preview,
        myList: state.entities.myList
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: id => dispatch(retrieveVideo(id)),
        clearCurrentVideo: (preview) => dispatch(clearCurrentVideo(preview)),
        receiveCurrentVideo: (video, preview) => dispatch(receiveCurrentVideo(video, preview)),
        receiveCurrentDescription: video => dispatch(receiveCurrentDescription(video)),
        clearDescription: () => dispatch(clearDescription()),
        addToList: (video) => dispatch(addToList(video)),
        removeFromList: (video) => dispatch(removeFromList(video)),
        retrieveList: () => dispatch(retrieveList())
    }
}

export default connect(msp, mdp)(VideoDescription);
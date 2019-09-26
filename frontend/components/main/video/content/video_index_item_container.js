import { connect } from 'react-redux'
import { retrieveVideo} from '../../../../actions/video_actions';
import { clearCurrentVideo, receiveCurrentVideo, addToList, removeFromList } from '../../../../actions/ui_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    return {
        descriptionOpen: Object.values(state.ui.description).length,
        previewVideo: state.ui.preview,
        myList: state.entities.myList
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: (preview) => dispatch(clearCurrentVideo(preview)),
        receiveCurrentVideo: (video, preview, time) => dispatch(receiveCurrentVideo(video, preview, time)),
        addToList: (video) => dispatch(addToList(video)),
        removeFromList: (video) => dispatch(removeFromList(video)),
    }
}

export default connect(msp, mdp)(VideoIndexItem);
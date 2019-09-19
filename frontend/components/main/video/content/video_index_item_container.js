import { connect } from 'react-redux'
import { retrieveVideo} from '../../../../actions/video_actions';
import { clearCurrentVideo, receiveCurrentVideo } from '../../../../actions/ui_actions';
import VideoIndexItem from './video_index_item';

const msp = state => {
    // debugger
    return {
        // previewVideoId: Object.keys(state.ui).length,
        // previewBool: Object.keys(state.ui.searching).length ? state.ui[Object.keys(state.ui)[0]]["preview"] : false,
        descriptionOpen: Object.values(state.ui.description).length,
        previewVideo: state.ui.preview
        // previewBool: state.ui.preview 
    }
}

const mdp = dispatch => {
    return {
        retrieveVideo: (id) => dispatch(retrieveVideo(id)),
        clearCurrentVideo: (preview) => dispatch(clearCurrentVideo(preview)),
        receiveCurrentVideo: (video, preview, time) => dispatch(receiveCurrentVideo(video, preview, time))
    }
}

export default connect(msp, mdp)(VideoIndexItem);
import React from 'react'
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    render() {
        return (
            <div className="video-index">
                <VideoIndexItemContainer />
            </div>
        )
    }
}

export default VideoIndex;
import React from 'react'
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    render() {
        return (
            <div className="video-index">
                <VideoIndexItem />
            </div>
        )
    }
}

export default VideoIndex;
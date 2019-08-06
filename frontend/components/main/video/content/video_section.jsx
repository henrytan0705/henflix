import React from 'react'
import VideoIndexContainer from './video_index_container'

class VideoSection extends React.Component {
    render() {
        return (
            <div className="video-section">
                {/* <div className="trending"> */}
                    <h1 className="categories">Trending Now</h1>
                    <VideoIndexContainer />
                    <h1 className="categories">Food/Horror</h1>
                    <VideoIndexContainer />
                    <h1 className="categories">Action</h1>
                    <VideoIndexContainer />
                {/* </div> */}
            </div>
        )
    }
}

export default VideoSection;
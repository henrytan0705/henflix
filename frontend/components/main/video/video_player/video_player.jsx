import React from 'react';
import { Link } from 'react-router-dom'

class VideoPlayer extends React.Component {
    componentDidMount() {
        // this.props.retrieveVideo()
    }

    render(){
        return(
            <div className="video-wrapper">
                <Link to="/browse" className="back-button"></Link>
                <video 
                    src={this.props.video.videoUrl} 
                    className="video-playing"
                    controls
                >
                </video>

                <div className="video-controls">
                    
                </div> 
            </div>
        )
    }
}

export default VideoPlayer;
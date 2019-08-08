import React from 'react';
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-feather';

class VideoPlayer extends React.Component {
    componentDidMount() {
        let id = parseInt(this.props.path);
        this.props.retrieveVideo(id);
    }

    render(){
        if(!this.props.video) return null;

        return(
            <div className="video-wrapper">
                <Link to="/browse" className="back-button"><ArrowLeft/></Link>
                
                <video 
                    src={this.props.video.videoUrl} 
                    className="video-playing"
                    controls
                    autoPlay
                > 
                </video>

                <div className="video-controls">
                    <div className="play-button"></div>
                    <div className="exit-button"></div>
                    <div className="progress-bar"></div>
                    <div className="full-screen"></div>
                </div> 
            </div>
        )
    }
}

export default VideoPlayer;
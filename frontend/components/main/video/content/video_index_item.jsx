import React from 'react';
// import VideoPlayer from ''
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.state = {
            hover: false 
        }
        this.setVideoToState = this.setVideoToState.bind(this);
    }

    playTrailer(){
        setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            
        );
    }

    showThumbnail(){
        setTimeout(
            function () {
                this.setState({ hover: false });
            }
            .bind(this),
            250
        );
    }

    setVideoToState(id) {
        this.props.retrieveVideo(id);
    }
    

    render(){   
        let video = this.props.video || {
            title: "",
            description: "",
            year: "",
            photo: "",
            videoUrl: "", 
        }

        let content1 = this.state.hover === false ? (
                <>
                <img className="video-thumbnail"
                    src={video.photoUrl}
                    // onMouseOver={this.playTrailer}
                    onClick={this.playTrailer}
                    // onClick={this.displayVideoDetails}
                    // onClick={this.openVideoPlayer}
                />
                </>
            ) : (
                <>
                    <video 
                        className="video-item" 
                        src={video.videoUrl} 
                        autoPlay
                        // onMouseOut={this.showThumbnail}
                        onClick={this.showThumbnail}
                        // onClick={this.openVideoPlayer}
                    >
                    </video>

                    <Link to="/watch" 
                        onClick={this.setVideoToState(video.id)}
                        className="display-play-button">
                    </Link>

                </>
            );

 
        return (
            <div className="video-index-item "
                onClick={this.displayDetails}>

                {content1}
                {/* <div className="display-video-details"></div> */}

            </div>
        )
    }
}

export default VideoIndexItem;
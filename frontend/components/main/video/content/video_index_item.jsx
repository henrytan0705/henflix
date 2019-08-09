import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'react-feather';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false 
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
    }

    playTrailer(){
        this.playId = setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            500
        );  
    }

    showThumbnail(){
        setTimeout(
            function () {
                this.setState({ hover: false });
            }
            .bind(this),
            500
        );
        
        clearTimeout(this.playId)
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

        let path = `/watch/${video.id}`;

        let content1 =
            this.state.hover === false ? (
            <div className="thumbnail-position">
                <video
                    className="video-thumbnail"
                    poster = { video.photoUrl }
                    onMouseOver={this.playTrailer}
                    onMouseOut={this.showThumbnail}
                    >
                </video >
            </div>
            ) : (
                <>
                <video
                    className="video-item"
                    src={video.videoUrl}
                    onMouseOut = { this.showThumbnail }
                    autoPlay
                >
                </video >

                <Link to={path}
                    onClick={this.setVideoToState(video.id)}
                    className="display-play-button">
                    <PlayCircle />
                </Link>

            </>
            );
 
        return (
            <div className="video-index-item tabindex='0'"
                // onClick={this.displayDetails}
            >

                {content1}
                {/* <div className="display-video-details"></div> */}

            </div>
        )
    }
}

export default VideoIndexItem;
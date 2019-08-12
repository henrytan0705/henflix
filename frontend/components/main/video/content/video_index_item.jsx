import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'react-feather';
import VideoDescriptionContainer from './description/video_description_container.js';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false 
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.description = null;
    }

    playTrailer(){
        this.playId = setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            600
        );  
    }

    showThumbnail(){
        setTimeout(
            function () {
                this.setState({ hover: false });
            }
            .bind(this),
            200
        );
        
        clearTimeout(this.playId);
    }

    setVideoToState(id) {
        this.props.retrieveVideo(id);
    }

    showDescription() {
        // debugger
        this.description = <VideoDescriptionContainer video={this.props.video}/>
    }

    render(){   
        let video = this.props.video || {
            title: "",
            description: "",
            year: "",
            photoUrl: "",
            videoUrl: "", 
        }

        let path = `/watch/${video.id}`;

        let content1 =
            this.state.hover === false ? (
            <div className="thumbnail-position"
                onMouseOver={this.playTrailer}
                >
                <video
                    className="video-thumbnail"
                    poster = { video.photoUrl }
                    >
                </video >
            </div>
            ) : (
                <>
                <video
                    className="video-item"
                    src={video.videoUrl}
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
                // onMouseOver={this.playTrailer}
                // onMouseLeave={this.showThumbnail}
                onMouseOut={this.showThumbnail}
                onClick={this.showDescription}
            >
                {content1}

                {this.description}

            </div>
        )
    }
}

export default VideoIndexItem;
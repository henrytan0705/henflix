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
            300
        );
        
        clearTimeout(this.playId);
    }

    setVideoToState(id) {
        this.props.retrieveVideo(id);
    }

    showDescription() {
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
                // onMouseOut={this.showThumbnail}
                >
                <video
                    className="video-thumbnail"
                    poster = { video.photoUrl }
                    // poster="https://i.ytimg.com/vi/PZheNUuK8jg/maxresdefault.jpg"
                    // onMouseOver={this.playTrailer}
                    // onMouseOut={this.showThumbnail}
                    >
                </video >
            </div>
            ) : (
                <>
                <video
                    className="video-item"
                    src={video.videoUrl}
                    // onMouseOut = { this.showThumbnail }
                    // onClick={this.showDescription}
                    autoPlay
                >
                </video >

                <Link to={path}
                // <Link to="/"
                    onClick={this.setVideoToState(video.id)}
                    className="display-play-button">
                    <PlayCircle />
                </Link>

            </>
            );
 
        // let vid = document.getElementsByClassName("video-thumbnail")[0];

        // vid.addEventListener("mouseover", () => {
        //     this.play();
        // })

        // vid.addEventListener("mouseout", () => {
        //     this.pause();
        // })
        
        return (
            <div className="video-index-item tabindex='0'"
                // onMouseOver={this.playTrailer}
                onMouseLeave={this.showThumbnail}
                // onClick={this.displayDetails}
            >
                {content1}
                {/* <div className="display-video-details"> */}
                    {/* <h1>{video.title}</h1> 
                    <h1>{video.year}</h1> 
                    <p>{video.description}</p> */}

                    {/* <h1>Angry Birds</h1> 
                    <h1>2019</h1> 
                    <p>Movie description</p> */}

                    {/* <VideoDescriptionContainer/> */}
                {this.description}
                {/* </div> */}

            </div>
        )
    }
}

export default VideoIndexItem;
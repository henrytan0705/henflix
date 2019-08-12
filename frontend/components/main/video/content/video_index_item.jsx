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
        this.vidRef = React.createRef
    }

    playTrailer(){
        this.playId = setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            700
        );  
    }

    showThumbnail(){
        let vid = document.querySelector("video");
        vid.pause();
        clearTimeout(this.playId);
        this.setState({hover: false});
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
                // onMouseOver={this.playTrailer}
                // onMouseOut={this.showThumbnail}
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
                    // onMouseLeave={this.showThumbnail}
                    autoPlay
                >
                </video >

                <Link to={path}
                    // onClick={this.setVideoToState(video.id)}
                    className="display-play-button">
                    <PlayCircle />
                </Link>

            </>
            );


//////////////////

        // <div className="thumbnail-position"
        //         // onMouseOver={this.playTrailer}
        //         // onMouseOut={this.showThumbnail}
        // >
        //     <video
        //         className="video-thumbnail"
        //         poster = { video.photoUrl }
        //         >
        //     </video >
        // </div>



        // let vid = document.querySelector("video");

        // vid.addEventListener("mouseover", () => {
        //         // vid.classList.remove("video-thumbnail")
        //         // vid.classList.add("video-item")
        //         this.play();
        //     }
        // );

        // vid.addEventListener("mouseleave", () => {
        //         // vid.classList.remove("video-thumbnail")
        //         // vid.classList.add("video-item")
        //         this.pause();
        //     }
        // );


//////////////////

       
        
        return (
            <div className="video-index-item tabindex='0'"
                // onMouseOver={this.playTrailer}
                // onMouseLeave={this.showThumbnail}
                // onClick={this.showDescription}
            >
                {content1}
            
                {this.description}

            </div>
        )
    }
}

export default VideoIndexItem;
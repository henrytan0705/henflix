import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'react-feather';
import VideoDescriptionContainer from './description/video_description_container.js';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            description: false
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        // this.showDescription = this.showDescription.bind(this);
        // this.description = null;
        // this.vidRef = React.createRef();
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
        clearTimeout(this.playId);
        this.setState({hover: false});
    }

    setVideoToState(id) {
        this.props.retrieveVideo(id);
    }

    // showDescription() {
    //     this.description = <VideoDescriptionContainer video={this.props.video}/>
    //     this.setState({description: true})
    // }

    render(){   
        let video = this.props.video || {
            id: "",
            title: "",
            description: "",
            year: "",
            photoUrl: "",
            videoUrl: "", 
        }
        
        let path = `/watch/${video.id}`;
        
        let content1 =
            this.state.hover === false ? (
            <div className="thumbnail-position">
                <video
                    className="video-thumbnail"
                    // src={video.videoUrl}
                    poster = { video.photoUrl }
                    onClick={this.props.show(video)}
                    >
                </video>
                {/* <span className="description-container" onClick={this.props.show}></span> */}
            </div>
            ) : (
            <>
                <video
                    className="video-item"
                    src={video.videoUrl}
                    autoPlay
                    onClick={this.props.show(video)}
                >
                </video>

                <Link to={path}
                    onClick={this.setVideoToState(video)}
                    className="display-play-button">
                    <PlayCircle />
                </Link>

                {/* <span className="description-container" onClick={this.props.show}></span> */}
            </>
            );

        // debugger
     
        return (
            <div className="video-index-item tabindex='0'"
                onMouseEnter={this.playTrailer}
                onMouseLeave={this.showThumbnail}
                // onClick={this.props.show}
                // onClick={this.showDescription}
            >
                {content1}
            
                {/* {this.description} */}

            </div>
        )
    }
}

export default VideoIndexItem;
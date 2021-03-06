import React from 'react';
import { Link } from 'react-router-dom';
import IndexItemButtonsContainer from './buttons/index_item_buttons_container';

// import { PlayCircle } from 'react-feather';
// import VideoDescriptionContainer from './description/video_description_container.js';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            description: false, 
            focus: false,
            // onList: false
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.vidRef = React.createRef();
    }

    componentDidMount(){
        this._mounted = true;
        // this.buttonType();
    }

    componentWillUnmount(){
        this._mounted = false;
    }

    playTrailer(){
        if (this._mounted) {
            if (this.props.descriptionOpen) {
                return;
            }
            
            this.playId = setTimeout(
                function () {
                    if (this._mounted) {
                        this.setState({ hover: true });
                        this.setVideoToState(this.props.video);
    
                        if (!!this.props.previewVideo.currentTime) {
                            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
                        }
                    }
                }   
                .bind(this),
                500
            );  
        }
    }

    showThumbnail(){
        clearTimeout(this.playId);

        if (!this.props.descriptionOpen && this.state.hover) {
            this.props.receiveCurrentVideo(this.props.video, false, this.vidRef.current.currentTime);
        }

        if (this._mounted) this.setState({hover: false});
    }

    setVideoToState(video) {
        if (this.props.video.id === this.props.previewVideo.id && !!this.props.previewVideo.id) {
            this.props.receiveCurrentVideo(this.props.video, true, this.props.previewVideo.currentTime);
        } else {
            this.props.receiveCurrentVideo(video, true, 0);
        }
    }

    showDescription() {
        if (this.props.video.id === this.props.previewVideo.id && !!this.props.previewVideo.id) {
            this.props.receiveCurrentVideo(this.props.video, true, this.vidRef.current.currentTime);
            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        }

        this.props.show(this.props.video);
    }

    componentDidUpdate() {
        if (this.props.descriptionOpen && this.state.hover === true) {
            this.showThumbnail();
        }
    }

    render() {   
        let video = this.props.video || {
            id: "",
            title: "",
            description: "",
            year: "",
            photoUrl: "",
            videoUrl: "", 
        }
        
        let path = `/watch/${video.id}`;
        
        this.content1 =
            this.state.hover === false ? (
                <div className="thumbnail-position">
                        <img
                            id={`video-${video.id}`}
                            className="video-thumbnail"
                            src={video.photoUrl}
                            onClick={this.props.show(video)}
                        >
                        </img>
                </div>
            ) : (
            <>
                <Link to={path}
                    className="video-item"
                >
                    <video
                        // className="video-item"
                        className="video-item-1"
                        src={video.videoUrl}
                        autoPlay
                        loop
                        ref={this.vidRef}
                    >
                    </video>

                    <i className="far fa-play-circle display-play-button"></i>
                    <h1 className="video-hover-description">{video.title}</h1>
                </Link>

                    <IndexItemButtonsContainer 

                    vidRef={this.vidRef}
                    video={this.props.video}/>

                <span 
                    className="description-button-container" 
                    onClick={this.props.show(video)}>
                        <div className="arrow-container">
                            <i className="fas fa-angle-down"></i>
                        </div>
                </span>

            </>
            );


        return (
            <div 
                className="video-index-item"
                onMouseEnter= {this.playTrailer}
                onMouseLeave={this.showThumbnail}
                onClick={this.showDescription}
            >
                {this.content1}

            </div>
        )
    }
}

export default VideoIndexItem;

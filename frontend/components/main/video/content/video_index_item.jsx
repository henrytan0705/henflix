import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'react-feather';
// import VideoDescriptionContainer from './description/video_description_container.js';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            description: false, 
            focus: false
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.vidRef = React.createRef();
        // this.description = null;
        // this.vidRef = React.createRef();
    }

    componentDidMount(){
        this._mounted = true;
        // if (this.props.video.id === this.props.previewVideo.id) {
        //     debugger
        //     // this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        //     this.vidRef.current = {currentTime: this.props.previewVideo.currentTime};
        // }
    }

    componentWillUnmount(){
        this._mounted = false;
    }

    toggleMute() {
        // debugger
        this.vidRef.current.muted = !this.vidRef.current.muted;
    }

    playTrailer(){
        // debugger
        // if (!this.props.previewVideoId) {
        if (this.props.descriptionOpen) {
            return;
        }

        // if (this.props.video.id !== this.props.previewVideo.id) {
        //     this.props.clearCurrentVideo(false);
        // }

        
        this.playId = setTimeout(
            function () {
                if (this._mounted) {
                    this.setState({ hover: true });
                    this.setVideoToState(this.props.video);
                    // this.props.receiveCurrentVideo(this.props.video, true, this.props.previewVideo.currentTime);
                    this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
                }
            }   
            .bind(this),
            600
        );  
    }

    showThumbnail(){
        clearTimeout(this.playId);

        if (!this.props.descriptionOpen && this.state.hover) {
            this.props.receiveCurrentVideo(this.props.video, false, this.vidRef.current.currentTime);
        }

        if (this._mounted) this.setState({hover: false});

    }

    setVideoToState(video) {
    //     // debugger
    //     // return () => { this.props.retrieveVideo(video.id);}
    //     // this.props.retrieveVideo(video.id);

            if (this.props.video.id === this.props.previewVideo.id && !!this.props.previewVideo.id) {
                // debugger
                // this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
                this.props.receiveCurrentVideo(this.props.video, true, this.props.previewVideo.currentTime);
            } else {
                // debugger
                this.props.receiveCurrentVideo(video, true, 0);
            }
        //    debugger
            // this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        // }
    }

    showDescription() {
        // debugger
        if (this.props.video.id === this.props.previewVideo.id && !!this.props.previewVideo.id) {
            // debugger
            this.props.receiveCurrentVideo(this.props.video, true, this.vidRef.current.currentTime);
            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        }

        this.props.show(this.props.video);

    }

    componentDidUpdate() {
        // debugger
        if (this.props.descriptionOpen && this.state.hover === true) {
            // debugger
            this.showThumbnail();
        }

        // if (this.props.video.id === this.props.previewVideo.id) {
        //     debugger
        //     // this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        //     this.vidRef.current = { currentTime: this.props.previewVideo.currentTime };
        // }
    }

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
        
        this.content1 =
            this.state.hover === false ? (
            <div className="thumbnail-position">
                    <img
                        id={`video-${video.id}`}
                        className="video-thumbnail"
                        src={video.photoUrl}
                        onClick={this.props.show(video)}
                        // onClick={this.showDescription}
                    >
                    </img>
                {/* <span className="description-container" onClick={this.props.show(video)}></span> */}
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
                        ref = {this.vidRef}
                    >
                    </video>

                    <i className="fas fa-volume-up item-mute-icon"
                        onClick={this.toggleMute}>
                    </i>

                    <i className="far fa-play-circle display-play-button"></i>
                    <h1 className="video-hover-description">{video.title}</h1>
                </Link>

                    {/* <div className="video-hover-description-container"> */}
                    {/* </div> */}

                {/* <Link to={path}> */}
                
                    {/* <h1 className="video-hover-description">{video.title}</h1> */}

                {/* </Link> */}

                {/* <Link to={path}> */}
                    {/* className="display-play-button"> */}
                    {/* <PlayCircle /> */}

                    {/* <i className="far fa-play-circle display-play-button"></i> */}
                    
                {/* </Link> */}
                
                <span 
                    className="description-button-container" 
                    onClick={this.props.show(video)}>
                    {/* onClick={this.showDescription}> */}
                        <div className="arrow-container">
                            <i className="fas fa-angle-down"></i>
                        </div>
                        {/* <i className="fas fa-chevron-down"></i> */}
                </span>
                {/* <span className="description-container" onClick={this.focusVideo(this.props, video)}></span> */}
            </>
            );

   

        // debugger
     
        // let indexItemHoverEffect = (this.props.previewVideoId) ? "vid" : "video-index-item";

        return (
            <div 
                className="video-index-item"
                // className={indexItemHoverEffect}
                // onMouseEnter= {this.props.previewBool ? this.showThumbnail : this.playTrailer}
                onMouseEnter= {this.playTrailer}
                onMouseLeave={this.showThumbnail}
                onClick={this.showDescription}
            >
                {this.content1}
            
                {/* {this.description} */}

            </div>
        )
    }
}

export default VideoIndexItem;

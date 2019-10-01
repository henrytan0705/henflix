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
            onList: false
        }
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.setVideoToState = this.setVideoToState.bind(this);
        this.showDescription = this.showDescription.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.vidRef = React.createRef();
        this.addVideo = this.addVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
        this.buttonType = this.buttonType.bind(this);
    }

    componentDidMount(){
        this._mounted = true;
        this.buttonType();
    }

    componentWillUnmount(){
        this._mounted = false;
    }

    toggleMute(e) {
        e.stopPropagation();
        this.vidRef.current.muted = !this.vidRef.current.muted;
    }

    addVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                return;
            }
        }

        Promise.all([this.props.addToList(this.props.video.id)])
            .then( () => this.props.retrieveList() )

        this.setState({ onList: true })
    }

    removeVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                Promise.all([this.props.removeFromList(this.props.video.id)])
                    .then( () => this.props.retrieveList() )
            }
        } 
        this.setState({ onList: false })
    }

    buttonType() {
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                this.listButton = (
                    <i class="fas fa-check-circle check-icon"
                        onClick={this.removeVideo}>
                    </i>
                )

            return;
            }
        }

        this.listButton = (
            <i className="fas fa-plus-circle add-icon"
                onClick={this.addVideo}>
            </i>
        )
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
                600
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

                    {/* <button> */}

                        {/* <i className="fas fa-volume-up item-mute-icon"
                            onClick={this.toggleMute}>
                        </i> */}

                    {/* </button> */}

                    <i className="far fa-play-circle display-play-button"></i>
                    <h1 className="video-hover-description">{video.title}</h1>
                </Link>

                    {/* <i className="fas fa-volume-up item-mute-icon"
                        onClick={this.toggleMute}>
                    </i> */}

                    {/* <i className="fas fa-plus-circle add-icon"
                        onClick={this.addVideo}>
                    </i>

                    <i className="fas fa-minus-circle minus-icon"
                        onClick={this.removeVideo}>
                    </i> */}
                
                    {/* {this.listButton} */}

                    <IndexItemButtonsContainer 
                    removeVideo={this.removeVideo} 
                    addVideo={this.props.addVideo} 
                    muteVideo={this.toggleMute}
                    vidRef={this.vidRef}/>

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

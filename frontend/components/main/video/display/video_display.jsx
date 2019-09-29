import React from 'react';
import { Link } from 'react-router-dom';
class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pathChange: false,
            scrolled: false,
            muted: false
        }
        this.vidRef = React.createRef();
        this.addScrollListener = this.addScrollListener.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    addScrollListener() {
        if (this._mount) {
            window.addEventListener('scroll', () => {
                let yOffset = window.pageYOffset;
                if (yOffset <= 300 && this._mount) {
                    this.setState({ scrolled: false })
                } else {
                    this.setState({ scrolled: true })
                }
            })
        }
    }

    toggleMute() {
        if (this.mount) {
            this.vidRef.current.muted = !this.vidRef.current.muted;
        }
    }

    componentDidMount(){
        this._mount = true;
        this.addScrollListener();
    }

    componentWillUnmount(){
        this._mount = false;
    }

    componentDidUpdate(prevProps) {
        if (this._mount) {
                if (!!this.props.previewVideo.status || this.state.scrolled || this.props.descriptionOpen) {
                    this.vidRef.current.pause();
                } else if (!this.props.previewVideo.status && !this.state.scrolled) {
                    this.vidRef.current.play();
                }
        }
    }

    render(){
        if (!this.props.video) return null;

        let video = this.props.video;
        let path = `/watch/${video.id}`

        return (
            <div className="video-display">
                {/* <div className="video-display-item"> */}
                    <h1 className="display-title">{video.title}</h1>
                    {/* <p>{video.description}</p> */}
                    {/* <h2>{video.year}</h2> */}

                    <Link className="display-play-icon" to={path}>
                        <i className="fas fa-play"></i>
                        <span className="gap"></span>
                        PLAY
                    </Link>

                    <button className="display-mute-icon"
                        onClick={this.toggleMute}>
                        <i className="fas fa-volume-up"></i>
                    </button>


                    <video 
                        className="display-video" 
                        src={video.videoUrl} 
                        // poster={video.photo}
                        autoPlay
                        ref={this.vidRef}
                        // onKeyPress={this.togglePlay}
                        // ref="featureRef"
                    > 
                    </video>
            </div>
        )
    }
}

export default VideoDisplay;
import React from 'react';
import { Link } from 'react-router-dom';
class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            pathChange: false,
            scrolled: false
        }
        this.vidRef = React.createRef();
        this.addScrollListener = this.addScrollListener.bind(this);
    }

    addScrollListener() {
        window.addEventListener('scroll', () => {
            let yOffset = window.pageYOffset;
            if (yOffset <= 300 && this._mount) {
                this.setState({ scrolled: false })
            } else {
                this.setState({ scrolled: true })
            }
        })
    }

    componentDidMount(){
        // this.props.retrieveVideo();
        this._mount = true;
        this.addScrollListener();
        // if (this.state.scrolled) {
        //     this.vidRef.current.pause();
        // } else {

        //     this.vidRef.current.play();
        // }
    }

    componentWillUnmount(){
        this._mount = false;
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.previewVideoId || this.state.scrolled) {
            // debugger
            this.vidRef.current.pause();
        } else if (!this.props.previewVideoId && !this.state.scrolled) {
            this.vidRef.current.play();
        }
    }

    render(){
        // let video = this.props.video || {
        //     title: "",
        //     description: "",
        //     year: "",
        //     photo: "",
        //     videoUrl: "",
        // }

        if (!this.props.video) return null;

        let video = this.props.video;
        let path = `/watch/${video.id}`

        return (
            <div className="video-display">
                <div className="video-display-item">
                    <h1 className="display-title">{video.title}</h1>
                    {/* <p>{video.description}</p> */}
                    {/* <h2>{video.year}</h2> */}
                    <Link className="display-play-icon" to={path}>
                        <i className="fas fa-play"></i>
                        <span className="gap"></span>
                        PLAY
                    </Link>
                    {/* <div></div> */}

                    <video 
                        className="display-video" 
                        src={video.videoUrl} 
                        // poster={video.photo}
                        // autoPlay={this.props.previewVideoId ? false : true}
                        autoPlay
                        // loop
                        ref={this.vidRef}
                        // onKeyPress={this.togglePlay}
                        // ref="featureRef"
                    > 
                    </video>
                </div>
            </div>
        )
    }
}

export default VideoDisplay;
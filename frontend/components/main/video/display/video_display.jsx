import React from 'react';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pathChange: false }
        this.vidRef = React.createRef();
    }


    componentDidMount(){
        // this.props.retrieveVideo();
    }

    componentDidUpdate(prevProps) {
        // debugger
        // if(prevProps.location.pathname !== this.props.path) {
        //     // debugger
        //     this.setState({ pathChange: true })
        // }
        if (this.props.previewVideoId) {
            this.vidRef.current.pause();
        } else if (!this.props.previewVideoId) {
            this.vidRef.current.play();
        }

    }

    render(){
        let video = this.props.video || {
            title: "",
            description: "",
            year: "",
            photo: "",
            videoUrl: "",
        }

        return (
            <div className="video-display">
                <div className="video-display-item">
                    {/* <h1>{video.title}</h1> */}
                    {/* <p>{video.description}</p> */}
                    {/* <h2>{video.year}</h2> */}

                    <div></div>

                    <video 
                        className="display-video" 
                        src={video.videoUrl} 
                        autoPlay={this.props.previewVideoId ? false : true}
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
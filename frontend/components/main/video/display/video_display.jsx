import React from 'react';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pathChange: false }
        // debugger
    }


    componentDidMount(){
        // this.props.retrieveVideo();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if(prevProps.location.pathname !== this.props.path) {
            // debugger
            this.setState({ pathChange: true })
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

        // debugger
        
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
                        // autoPlay
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
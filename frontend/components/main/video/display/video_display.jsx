import React from 'react';

class VideoDisplay extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    }


    componentDidMount(){
        // this.props.retrieveVideo();
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
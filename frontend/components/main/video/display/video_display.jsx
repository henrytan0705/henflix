import React from 'react';

class VideoDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.retrieveVideo(1)
    }


    render(){

// debugger
        let video = this.props.video || {
            one: {
                title: "",
                description: "",
                year: "",
                photoUrl: "",
                videoUrl: "",
            }
        
        }
        debugger
        return (
            <div className="video-display">
                {/* <h1>THIS IS THE VIDEOS DISPLAY COMPONENT</h1> */}
                <div className="video-display-item">
                    {/* <h1>{video.title}</h1> */}
                    {/* <p>{video.description}</p> */}
                    {/* <h2>{video.year}</h2> */}
                    <video className="display-video" src={video.videoUrl}  autoPlay>
                        {/* <source src={video.videoUrl} type="video/mp4"> */}
                        {/* Your browser does not support the video tag. */}
                    </video>
                </div>
                    {/* <button>Pause</button> */}
            </div>
        )
    }
}

export default VideoDisplay;
import React from 'react';
import { Link } from 'react-router-dom';


class VideoDescription extends React.Component {

    constructor(props) {
        super(props);
        // this.content = null;
        this.state = {focus: false}
        this.setVideoToState = this.setVideoToState.bind(this);
    }

    componentDidMount() {
        // this.props.retrieveVideo(this.props.id);
        this.setVideoToState(this.props.video);
        this.setState({focus: true})
    }

    setVideoToState(video) {
        return () => { this.props.retrieveVideo(video.id); }
    }


    render() {
        // debugger
        if (this.props.video === undefined) return null;

        let video = this.props.video;
        // let vid = document.getElementById(`video-${video.id}`);
        // console.log(vid);
        // debugger
        
        let content = (
            <>
                <h1>{video.title}</h1>
                <h1>{video.year}</h1>
                <p>{video.description}</p>
                {/* <h1>{`EST: ${Math.ceil(vid.duration/ 60)} m`}</h1> */}
            </>
        )

        let path = `/watch/${video.id}`;

        return (
            <div className="display-video-details show-description">
                <div className="description-wrapper">
                
                    <div className="description-side">
                        {content}
                    </div>

                    <div className="description-video-container">
                        <Link to={path}
                            onClick={this.setVideoToState(video)}
                            >
                            <video className="description-video" 
                                    src={video.videoUrl} 
                                    autoPlay
                                    >
                            </video>
                        </Link>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default VideoDescription;
import React from 'react';

class VideoDescription extends React.Component {

    constructor(props) {
        super(props);
        // this.content = null;
    }

    componentDidMount() {
        // this.props.retrieveVideo(this.props.id);
    }

    render() {
        // debugger
        if (!this.props.video) return null;

        let video = this.props.video;
        let vid = document.getElementById(`video-${video.id}`);
        // debugger
        
        let content = (
            <>
                <h1>{video.title}</h1>
                <h1>{video.year}</h1>
                <p>{video.description}</p>
                <h1>{`EST: ${Math.ceil(vid.duration/ 60)} m`}</h1>
            </>
        )

        return (
            <div className="display-video-details show-description">
                <div className="description-wrapper">
                
                    <div className="description-side">
                        {content}
                    </div>

                    <div className="description-video-container">
                        <video className="description-video" 
                                // id="abc"
                                src={video.videoUrl} 
                                // controls
                                autoPlay>
                        </video>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default VideoDescription;
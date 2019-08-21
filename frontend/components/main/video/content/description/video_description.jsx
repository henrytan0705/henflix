import React from 'react';

class VideoDescription extends React.Component {

    constructor(props) {
        super(props);
        this.content = null;
    }

    render() {
        // debugger
        let video = this.props.video;

        if (!this.props.video) return null;

        return (
            <div className="display-video-details show-description">
                <div className="description-wrapper">
                
                    <div className="description-side">
                        {this.content}
                        <h1>DESCRIPTION AREA</h1>
                    </div>

                    <div className="description-video-container">
                        <video className="description-video" 
                                src={video.videoUrl} 
                                autoPlay>
                        </video>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default VideoDescription;
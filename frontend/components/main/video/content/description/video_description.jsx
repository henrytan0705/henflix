import React from 'react';
import { Link } from 'react-router-dom';

class VideoDescription extends React.Component {
    constructor(props) {
        super(props);
        this.closeDescription = this.closeDescription.bind(this);
    }

    componentDidMount() {
        this.props.receiveCurrentDescription(this.props.video);
    }

    closeDescription() {
        this.props.clearDescription();
    }

    componentWillMount() {
        if (this.props.video.id !== this.props.currentDescription.id && this.props.currentDescription.id) {
    //         this.closeDescription();
        let description = document.getElementsByClassName("close-button");
        for (let i = 0; i < description.length; i++) {
            description[i].click();
        }
        // this.props.receiveCurrentDescription(this.props.video);
        }
    }

    render() {
        if (this.props.video === undefined) return null;

        let video = this.props.video;
        let path = `/watch/${video.id}`;
        
        let content = (
            <>
                <div className="title-container">
                    <h1 className="description-title">{video.title}</h1>
                </div>

                <div className="bottom-description-container">
                    <div className="year-container">
                        <h1 className="description-year">{video.year}</h1>
                    </div>

                    <div className="desc-container">
                        <p className="description">{video.description}</p>
                    </div>

                    <div 
                    // className="description-play-button"
                    >
                        <Link to={path}>
                            <span className="description-play-button">
                                <span className="">
                                    <i className="fas fa-play"></i>
                                </span>

                                <span className="play-button-text">
                                    Play
                                </span>

                            </span>
                        </Link>
                    </div>
                </div>
                {/* <h1>{`EST: ${Math.ceil(vid.duration/ 60)} m`}</h1> */}
            </>
        )

        

        return (
            <div className="display-video-details show-description">
                <div className="description-wrapper">
                
                    <div className="description-side">
                        {content}
                    </div>

                    <div className="description-video-container">
                        <Link to={path}
                            // onClick={this.setVideoToState}
                            onClick={this.closeDescription}
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
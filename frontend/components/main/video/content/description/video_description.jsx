import React from 'react';
import { Link } from 'react-router-dom';

class VideoDescription extends React.Component {
    constructor(props) {
        super(props);
        this.closeDescription = this.closeDescription.bind(this);
        this.vidRef = React.createRef();
    }

    componentDidMount() {
        this.props.receiveCurrentDescription(this.props.video);
        if (this.props.video.id === this.props.previewVideo.id) {
            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        }

    }

    closeDescription() {
        this.props.clearDescription();
    }

    componentWillMount() {
        if (this.props.video.id !== this.props.currentDescription.id && this.props.currentDescription.id) {
    //         this.closeDescription();
        let description = document.getElementsByClassName("close-button");
        // debugger
        for (let i = 0; i < description.length; i++) {
            let arr = [];

            for (let x = 0; x < description[i].classList.length; x++) {
                let classItem = description[i].classList[x];
                arr.push(classItem);
                // debugger
            }

            // debugger
            
            for (let j = 0; j < this.props.video.genres.length; j++) {
                let genre = this.props.video.genres[j];
                if (genre === "Live Action") genre = "Live";
                // FIX BY CHANGING SEED FILE - GENRE "LIVE ACTION" TO "LIVE-ACTION"

                // debugger
                if (!arr.includes(genre) && genre !== "Movie" && genre !== "TV Show") {
                    // debugger
                    description[i].click();
                    break;
                }

            }
        }
        // this.props.receiveCurrentDescription(this.props.video);
        }
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.currentDescription.id) {
    //         debugger
    //         this.props.receiveCurrentDescription(this.props.video);
    //     }
    // }

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

                                {/* <span className=""></span> */}

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
                                    loop
                                    ref={this.vidRef}
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
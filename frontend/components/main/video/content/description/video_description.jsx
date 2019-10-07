import React from 'react';
import { Link } from 'react-router-dom';

class VideoDescription extends React.Component {
    constructor(props) {
        super(props);
        this.vidRef = React.createRef();
        this.closeDescription = this.closeDescription.bind(this);
        this.addVideo = this.addVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
        this.buttonType = this.buttonType.bind(this);
    }

    closeDescription() {
        this.props.clearDescription();
    }
    
    addVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);
        
        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                return;
            }
        }
        
        Promise.all([this.props.addToList(this.props.video.id)])
        .then(() => this.props.retrieveList())
        
        this.setState({ onList: true })
    }
    
    removeVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);
        
        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                Promise.all([this.props.removeFromList(this.props.video.id)])
                .then(() => this.props.retrieveList())
            }
        }
        this.setState({ onList: false })
    }
    
    buttonType() {
        let list = Object.values(this.props.myList);
        
        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                this.listButton = (
                    <span className="list-box" onClick={this.removeVideo}>
                        <div className="list-button">
                            <i className="fas fa-check-circle description-list-icon">
                            </i>

                            <p className="list-text">My List</p>
                        </div>
                    </span>

                )
                return;
            }
        }
        
        this.listButton = (
            <span className="list-box" onClick={this.addVideo}>
                <div className="list-button">
                    <i className="fas fa-plus-circle description-list-icon">
                    </i>
                    <p className="list-text">My List</p>
                </div>
            </span>
        )
    }
    
    componentDidMount() {
        this.props.receiveCurrentDescription(this.props.video);
        if (this.props.video.id === this.props.previewVideo.id) {
            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
        }

    }

    componentWillMount() {
        if (this.props.video.id !== this.props.currentDescription.id && this.props.currentDescription.id) {
            let description = document.getElementsByClassName("close-button");
            
            for (let i = 0; i < description.length; i++) {
                let arr = [];
                
                for (let x = 0; x < description[i].classList.length; x++) {
                    let classItem = description[i].classList[x];
                    arr.push(classItem);
        
                }
                
                for (let j = 0; j < this.props.video.genres.length; j++) {
                    let genre = this.props.video.genres[j];
                    if (genre === "Live Action") genre = "Live";
                    // FIX BY CHANGING SEED FILE - GENRE "LIVE ACTION" TO "LIVE-ACTION"

                    if (!arr.includes(genre) && genre !== "Movie" && genre !== "TV Show") {
                        description[i].click();
                        break;
                    }

                }
            }
        }
    }


    render() {
        if (this.props.video === undefined) return null;

        this.buttonType();
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

                    <div className="description-buttons">
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

                        {this.listButton}
                        
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
                            className="description-video-section"
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
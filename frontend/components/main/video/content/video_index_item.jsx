import React from 'react';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.playTrailer = this.playTrailer.bind(this);
        this.showThumbnail = this.showThumbnail.bind(this);
        this.state = {
            hover: false 
        }
    }

    componentDidMount(){
        // this.props.retrieveVideo(2);
        // this.props.retrieveVideos();
    }

    playTrailer(){
        setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            250
        );
    }

    showThumbnail(){
        setTimeout(
            function () {
                this.setState({ hover: false });
            }
            .bind(this),
            250
        );
    }

    render(){   
        let video = this.props.video || {
            title: "",
            description: "",
            year: "",
            photo: "",
            videoUrl: "", 
        }

        let content1 = this.state.hover === false ? (
                <img className="video-thumbnail"
                    src={video.photoUrl}
                    onMouseOver={this.playTrailer}
                    // onClick={this.playTrailer}
                />
            ) : (
                <>
                    <video 
                        className="video-item" 
                        src={video.videoUrl} 
                        // src="Users/henry/Desktop/VIDEOS/master_chef_junior.mp4"
                        autoPlay
                        onMouseOut={this.showThumbnail}
                        // onClick={this.showThumbnail}
                    >
                    </video>

                    <div className="video-info">
                        <h1>{video.title}</h1>
                        <p className="video-description">{video.description}</p>
                        <h1>{video.genre}</h1>
                        <h1>{video.year}</h1>
                    </div>
                </>
            );

        // debugger
        return (
            <div className="video-index-item">
                {content1}
            </div>
        )
    }
}

export default VideoIndexItem;
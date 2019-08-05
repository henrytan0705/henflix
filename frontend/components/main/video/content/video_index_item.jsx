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
    }

    playTrailer(){
        // this.setState({
        //     hover: true
        // })
        setTimeout(
            function () {
                this.setState({ hover: true });
            }
            .bind(this),
            1500
        );
    }

    showThumbnail(){
        // this.setState({
        //     hover: false
        // })

        setTimeout(
            function () {
                this.setState({ hover: false });
            }
                .bind(this),
            1000
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

        let content = this.state.hover === false ? (
                <img className="video-thumbnail"
                    src={video.photoUrl}
                    onMouseOver={this.playTrailer}
                />) 
            : (
                <video 
                    className="video-item" 
                    src={video.videoUrl} 
                    autoPlay
                    onMouseOut={this.showThumbnail}>
                </video>
            );

        return (
            <div className="video-index-item">
                <h1 className="category">Trending Now</h1>
                {content}
                {/* <img className="video-thumbnail" 
                    src={video.photoUrl}
                    onMouseDown=""
                /> */}
                {/* <video className="video-item" src={video.videoUrl}></video> */}
            </div>
        )
    }
}

export default VideoIndexItem;
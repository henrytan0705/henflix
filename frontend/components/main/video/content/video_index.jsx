import React from 'react'
import VideoIndexItemContainer from './video_index_item_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.retrieveVideos();
    }

    render() {

        if(!this.props.videos) return null;

        let videoItems = Object.values(this.props.videos).map((video,idx) => {
            return (<VideoIndexItemContainer key={idx} video={video} />)
        });

        // let videoItems = Object.values(this.props.videos).map((video,idx) => {
        //     if (video.genre === this.props.genre) {
        //         // debugger
        //         return (<VideoIndexItemContainer key={idx} video={video} genre={video.genre}/>)
        //     }
        // }) 

        return (
            <div className="video-index scrolling-wrapper"> 
                {videoItems}
                {/* {videoItems} */}
                {/* {videoItems} */}
                {/* {videoItems} */}
            </div>
        )
    }
}

export default VideoIndex;
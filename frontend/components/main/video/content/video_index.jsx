import React from 'react'
import VideoIndexItemContainer from './video_index_item_container';
import VideoDescriptionContainer from './description/video_description_container';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false
        }
        this.description = null;
        this.showDescription = this.showDescription.bind(this);
        this.closeDescription = this.closeDescription.bind(this);
    }

    componentDidMount() {
        // this.props.retrieveVideos();
    }

    showDescription() {
        debugger
        this.description = <VideoDescriptionContainer video={this.props.video} close={this.closeDescription}/>
        this.setState({showDescription: true});
    }

    closeDescription() {
        this.description = null;
        this.setState({showDescription: false});
    }

    render() {

        if(!this.props.videos) return null;

        let videoItems = Object.values(this.props.videos).map((video,idx) => {
            // debugger
            return (
                <>
                    <VideoIndexItemContainer key={idx} video={video} />
                    <span className="description-container" onClick={this.showDescription}></span>
                </>
            )
        });

        return (
            <>
                <div className="index-size-limit">
                    <div className="video-index scrolling-wrapper"> 
                        {videoItems}
                    
                        {/* {videoItems} */}
                    </div>
                    
                </div>
                    <div>
                        {this.description}
                    </div>
            </>
        )
    }
}

export default VideoIndex;
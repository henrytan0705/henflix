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
        this.visibleX = false;
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    showDescription(video) {
        return () => {
            this.visibleX = true;
            this.description = <VideoDescriptionContainer key={`info-${video.id}`} video={video}/>
            this.setState({showDescription: true});
       }
    }

    closeDescription() {
        this.description = null;
        this.visibleX = false;
        // this.props.clearCurrentVideo();
        this.props.clearDescription();
        this.setState({showDescription: false});
    }

    render() {

        if(!this.props.videos) return null;

        let videoItems = Object.values(this.props.videos).map((video,idx) => {
            return (
                <VideoIndexItemContainer key={`${video}${idx}`} video={video} show={this.showDescription}/>
            )
        });

        let visible = (this.visibleX === true) ? "close-description-button" : "no-button"

        return (
            <>
                <div className="index-size-limit">
                    

                    <div className="video-index scrolling-wrapper"> 
                        {/* <div className="video-arrows">
                            <i class="fas fa-chevron-left"></i>
                        </div>         */}

                        {videoItems}

                        {/* <div className="video-arrows">
                            <i class="fas fa-chevron-right"></i>
                        </div> */}
                    </div>

                   
                    
                </div>

                <div className="description-outer-wrapper">
                    {this.description}
                    <button onClick={this.closeDescription}
                        className={`${visible}`}
                        >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </>
        )
    }
}

export default VideoIndex;
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

    componentWillUpdate() {
        // debugger
        // if (Object.values(this.props.description).length) {
        //     let correctVideoDescriptionRow = false;
        //     for (let i = 0; i < this.props.videos.length; i++) {
        //         // debugger
        //         if (this.props.videos[i].id = this.props.description.id) {
        //             debugger
        //             correctVideoDescriptionRow = true;
        //         }
        //     }
        //     debugger
        //     if (!correctVideoDescriptionRow) {
        //         debugger
                // this.closeDescription();
            // }
        // }
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    showDescription(video) {
        // debugger
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
        if (!this.props.videos) return null;
        
        // let videoItems; 
        // this.content;
        // let visible = (this.visibleX === true) ? "close-description-button" : "no-button";
        
        // if (this.props.componentType === "main") {
            let videoItems = Object.values(this.props.videos).map((video, idx) => {
                return (
                    <VideoIndexItemContainer 
                    key={`${video}${idx}`} 
                    video={video} 
                    show={this.showDescription} 
                    close={this.closeDescription}/>
                )
            });

        //     this.content = (
        //         <>
        //             <div className="index-size-limit">

        //                 <div className="video-index scrolling-wrapper">
        //                     {/* <div className="video-arrows">
        //                     <i class="fas fa-chevron-left"></i>
        //                 </div>         */}

        //                     {videoItems}

        //                     {/* <div className="video-arrows">
        //                     <i class="fas fa-chevron-right"></i>
        //                 </div> */}
        //                 </div>

        //             </div>

        //             <div className="description-outer-wrapper">
        //                 {this.description}
        //                 <button onClick={this.closeDescription}
        //                     className={`${visible}`}
        //                 >
        //                     <i className="fas fa-times"></i>
        //                 </button>
        //             </div>
        //         </>
        //     )

        // } else {
        //     videoItems = [];
        //     let arr = [];
        //     let videos = Object.values(this.props.videos);

        //     for (let i = 0; i < videos.length; i++) {
        //         arr.push(
        //             <VideoIndexItemContainer
        //              key={`${videos[i]}-${i}`}
        //              video={videos[i]} show={this.showDescription} />
        //         )
    
        //         if (arr.length === 6 || i === videos.length - 1) {
        //             videoItems.push(<div className="search-result-row">{arr}</div>)
        //             // videoItems.push(arr);
        //             arr = []; 
        //         }
        //     }
            
        //     this.content = videoItems.map((row) => {
        //         return (
        //             <>
        //                 <div className="index-size-limit">
        //                     <div className="video-index scrolling-wrapper">
        //                         {row}
        //                     </div>
        //                 </div>

        //                 <div className="description-outer-wrapper">
        //                     {this.description}
        //                     <button onClick={this.closeDescription}
        //                         className={`${visible}`}
        //                     >
        //                         <i className="fas fa-times"></i>
        //                     </button>
        //                 </div>
        //             </>
        //         )
        //     })

        //     // content = (
        //     //     <>
        //     //         <div className="index-size-limit">
        //     //             <div className="video-index scrolling-wrapper">
        //     //                 {row}
        //     //             </div>

        //     //         </div>

        //     //         <div className="description-outer-wrapper">
        //     //             {this.description}
        //     //             <button onClick={this.closeDescription}
        //     //                 className={`${visible}`}
        //     //             >
        //     //                 <i className="fas fa-times"></i>
        //     //             </button>
        //     //         </div>
        //     //     </>
        //     // )
        // }

        

        // videoItems = Object.values(this.props.videos).map((video,idx) => {
        //     return (
        //         <VideoIndexItemContainer key={`${video}${idx}`} video={video} show={this.showDescription}/>
        //     )
        // });

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
                        className={`${visible} close-button`}
                        >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </>
            // <>
            //     {this.content}
            // </>
        )
    }
}

export default VideoIndex;
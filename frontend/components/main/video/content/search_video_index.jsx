// import React from 'react';
// // import SearchVideoIndexContainer from './search_video_index';
// import VideoIndexItemContainer from './video_index_item_container';

// class SearchVideoIndex extends React.Component {
//     render() {

//         let videoItems = Object.values(this.props.videos).map((video, idx) => {
//             return (
//                 <VideoIndexItemContainer key={`${video}${idx}`} video={video} show={this.showDescription} />
//             )
//         });

//         let visible = (this.visibleX === true) ? "close-description-button" : "no-button"

//         return (
//             <>
//                 <div className="index-size-limit">

//                     <div className="video-index scrolling-wrapper">
//                         {videoItems}
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
//     }
// }

// export default SearchVideoIndex;
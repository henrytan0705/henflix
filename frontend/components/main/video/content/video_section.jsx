import React from 'react'
import VideoIndexContainer from './video_index_container'

class VideoSection extends React.Component {
    render() {
        let videosArray = Object.values(this.props.videos);
        // debugger
        
        let genres = Object.values(this.props.genres).filter(genre => genre.genre != "TV Show" && genre.genre != "Movie");

        // let animation = genres.

        let animationVideos = videosArray.filter(video => video.genres.includes("Animation")); 
 
        let foodVideos = videosArray.filter(video => video.genres.includes("Food"));
        
        let liveActionVideos = videosArray.filter(video => video.genres.includes("Live Action"));
        
        let educationalVideos = videosArray.filter(video => video.genres.includes("Educational"));

        return (
            <div className="video-section">
                {/* {/* <h1 className="categories">Trending Now</h1> */}
                {/* <VideoIndexContainer genre="Trending" videos={trendingVideos}/> */}
                
                <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos}/>  
                {/* <VideoIndexContainer genre="Animation" />   */}

                <h1 className="categories">Food/Horror</h1>
                <VideoIndexContainer genre="Food" videos={foodVideos}/>
                {/* <VideoIndexContainer genre="Food" /> */}
                
                <h1 className="categories">Live Action</h1>
                <VideoIndexContainer genre="Live Action" videos={liveActionVideos}/>  
                {/* <VideoIndexContainer genre="Live Action" />   */}

                <h1 className="categories">Educational</h1>
                <VideoIndexContainer genre="Educational" videos={educationalVideos}/>
                {/* <VideoIndexContainer genre="Educational"/> */}

            </div>
        )
    }
}

export default VideoSection;
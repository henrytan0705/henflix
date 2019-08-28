import React from 'react'
import VideoIndexContainer from './video_index_container'

class VideoSection extends React.Component {
    render() {
        let videosArray = Object.values(this.props.videos);
        
        let animationVideos = videosArray.filter(video => video.genres.includes("Animation")); 
        let animationRow = (!Object.values(animationVideos).length) ? null : (
            <>
                <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos} />
            </>
        )
        
        let foodVideos = videosArray.filter(video => video.genres.includes("Food"));
        let foodRow = (!Object.values(foodVideos).length) ? null : (
            <>
                <h1 className="categories">Food/Horror</h1>
                <VideoIndexContainer genre="Food" videos={foodVideos} />
            </>
        )
        let liveActionVideos = videosArray.filter(video => video.genres.includes("Live Action"));
        let liveRow = (!Object.values(liveActionVideos).length) ? null : (
            <>
                <h1 className="categories">Live Action</h1>
                <VideoIndexContainer genre="Live Action" videos={liveActionVideos} />  
            </>
        )

        let educationalVideos = videosArray.filter(video => video.genres.includes("Educational"));
        let educationalRow = (!Object.values(educationalVideos).length) ? null : (
            <>
                <h1 className="categories">Educational</h1>
                <VideoIndexContainer genre="Educational" videos={educationalVideos} />
            </>
        )
        
        return (
            <div className="video-section">
                {/* {/* <h1 className="categories">Trending Now</h1> */}
                {/* <VideoIndexContainer genre="Trending" videos={trendingVideos}/> */}
                
                {/* <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos}/>   */}
           
                {animationRow}

                {/* <h1 className="categories">Food/Horror</h1>
                <VideoIndexContainer genre="Food" videos={foodVideos}/> */}
             
                {foodRow}
                
                {/* <h1 className="categories">Live Action</h1>
                <VideoIndexContainer genre="Live Action" videos={liveActionVideos}/>   */}

                {liveRow}

                {/* <h1 className="categories">Educational</h1>
                <VideoIndexContainer genre="Educational" videos={educationalVideos}/> */}

                {educationalRow}
            </div>
        )
    }
}

export default VideoSection;
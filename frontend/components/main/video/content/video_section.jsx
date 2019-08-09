import React from 'react'
import VideoIndexContainer from './video_index_container'

class VideoSection extends React.Component {
    render() {
        let videosArray = Object.values(this.props.videos);

        let animationVideos = videosArray.filter(video => video.genre === "Animation");
        let foodVideos = videosArray.filter(video => video.genre === "Food");
        let liveActionVideos = videosArray.filter(vider => video.genre === "Live Action");
        let educationalVideos = videos.videosArray.filter(video => video.genre === "Educational")

        return (
            <div className="video-section">
                {/* {/* <h1 className="categories">Trending Now</h1> */}
                {/* <VideoIndexContainer genre="Trending" videos={trendingVideos}/> */}
                
                <h1 className="categories">Animations</h1>
                <VideoIndexContainer genre="Animation" videos={animationVideos}/>  

                <h1 className="categories">Food/Horror</h1>
                <VideoIndexContainer genre="Food" videos={foodVideos}/>
                
                <h1 className="categories">Live Action</h1>
                <VideoIndexContainer genre="Animation" videos={liveActionVideos}/>  

                <h1 className="categories">Educational</h1>
                <VideoIndexContainer genre="Food" videos={educationalVideos}/>

            </div>
        )
    }
}

export default VideoSection;
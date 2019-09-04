import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
import VideoDisplayContainer from './video/display/video_display_container';
import VideoSection from './video/content/video_section';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.retrieveVideos();
        this.props.retrieveGenres();
    }

    render() {
        if (!Object.values(this.props.videos).length || !Object.values(this.props.genres).length) return null;

        if(this.props.url === "Search") {
            return (
                <div className="main-page">
                    <NavbarMainContainer />
                    <div className="">
                       <VideoIndex videos={videos}/>
                    </div>
                </div>
            )
        }
        
        let videosArray = Object.values(this.props.videos);
        let videos = this.props.videos;
        let path = this.props.path;
        
        if (path.length > 2) {
            let id = parseInt(path[path.length - 1]);
            let genre = this.props.genres[id];
            let genreVideos = videosArray.filter(vid => vid.genres.includes(genre.genre));
            videos = genreVideos;

            // let videoIds = genre.vide_ids;
            // let videoIds = genre.id;
            // let genreVideos = videosArray.filter(vid => vid.genres.includes(id));
            // displayVideo = VideosArray.filter(video => video.)
        }
        let filteredVideos = Object.values(videos);
        // let displayVideo = filteredVideos[Math.floor(Math.random() * filteredVideos.length)];
        let displayVideo = filteredVideos[0];
        return(
            <div className="main-page">
                <NavbarMainContainer /> 
                <div className="main-content">
                    <VideoDisplayContainer video={displayVideo}/>                
                    <VideoSection videos={videos} genres={this.props.genres}/>
                </div>

            </div>
        )
    }
}

export default Main;
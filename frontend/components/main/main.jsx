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
        // debugger
        let videosArray = Object.values(this.props.videos);
        let displayVideo = videosArray.filter(video => video.title === "The Angry Birds Movie 2");
        let videos = this.props.videos;

        let path = this.props.path;
        // debugger

        if (path.length > 2) {
            let id = parseInt(path[path.length - 1]);
            // debugger
            let genre = this.props.genres[id];
            // debugger
            // let videoIds = genre.vide_ids;
            // let videoIds = genre.id;
            // debugger
            // let genreVideos = videosArray.filter(vid => vid.genres.includes(id));
            let genreVideos = videosArray.filter(vid => vid.genres.includes(genre.genre));
            // displayVideo = VideosArray.filter(video => video.)
            videos = genreVideos;
            // debugger
        }


        return(
            <div className="main-page">
                <NavbarMainContainer /> 
                <div className="main-content">
                    <VideoDisplayContainer video={displayVideo[0]}/>                
                    <VideoSection videos={videos} genres={this.props.genres}/>
                </div>

            </div>
        )
    }
}

export default Main;
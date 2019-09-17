import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
import VideoDisplayContainer from './video/display/video_display_container';
import VideoSection from './video/content/video_section';
import SearchContainer from './search_container';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // debugger
        if(!Object.keys(this.props.videos).length || 
            !Object.keys(this.props.genres).length){
                // debugger
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }
    }

    render() {
        if (!Object.values(this.props.videos).length || !Object.values(this.props.genres).length) return null;
        
        // let content;

        // if (this.props.search.status) {
        //     content = (
        //         <div>
        //             <SearchContainer/>
        //         </div>
        //     )
        // } else {
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

            // content = (
            //     <div className="main-content">
            //         <VideoDisplayContainer video={displayVideo} />
            //         <VideoSection videos={videos} genres={this.props.genres} />
            //     </div>
            // )
        // }
 

        return(
            // <div className="main-page">
                // <NavbarMainContainer /> 
                <div className="main-content">
                    <VideoDisplayContainer video={displayVideo}/>                
                    <VideoSection videos={videos} genres={this.props.genres}/>
                </div>
                // {/* {content} */}
            // </div>
        )
    }
}

export default Main;
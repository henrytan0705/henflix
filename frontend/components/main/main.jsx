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
    }nh

    render() {
        if(!this.props.videos) return null;

        let videosArray = Object.values(this.props.videos)
        let displayVideo = videosArray.filter(video => video.title === "The Angry Birds Movie 2");

        return(
            <div className="main-page">
                <NavbarMainContainer /> 
                <div className="main-content">
                    <VideoDisplayContainer video={displayVideo[0]}/>
                    {/* <VideoDisplayContainer /> */}
                    <VideoSection videos={this.props.videos}/>
                    {/* <VideoSection/> */}
                </div>

            </div>
        )
    }
}

export default Main;
import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
import VideoDisplayContainer from './video/display/video_display_container';
import VideoSection from './video/content/video_section';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="main-page">
                <NavbarMainContainer/> 
                <div className="main-content">
                    <VideoDisplayContainer/>
                    <VideoSection/>
                </div>

            </div>
        )
    }
}

export default Main;
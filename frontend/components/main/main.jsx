import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
import VideoDisplay from './video/video_display';
import VideoSection from './video/video_section';

class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <NavbarMainContainer/> 
                <div>
                    <VideoDisplay/>
                    <VideoSection/>
                </div>

            </div>
        )
    }
}

export default Main;
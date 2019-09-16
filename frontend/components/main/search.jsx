import React from 'react';
import NavbarMainContainer from '../navbar/navbar_main_container';
// import VideoSection from './video/content/video_section';
import VideoIndexContainer from './video/content/video_index_container';

class Search extends React.Component {
    componentDidMount() {
        if (!Object.keys(this.props.videos).length ||
            !Object.keys(this.props.genres).length) {
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }
    }

    render() {
        return (
            <div className="main-page">
                <NavbarMainContainer/>
                <div className='main-content'>
                    {/* <VideoSection videos={this.props.searchResults} genres={this.props.genres} /> */}
                    <VideoIndexContainer videos={this.props.searchResults}/>
                </div>
            </div>
        )
    }
}

export default Search;
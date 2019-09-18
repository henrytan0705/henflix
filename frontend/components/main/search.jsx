import React from 'react';
// import NavbarMainContainer from '../navbar/navbar_main_container';
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
        if (Object.keys(this.props.searchResults).length > 0) {
            let videoItems = [];
            let arr = [];
            let videos = Object.values(this.props.searchResults);
    
            for (let i = 0; i < videos.length; i++) {
                arr.push(videos[i])
    
                if (arr.length === 6 || i === videos.length - 1) {
                    videoItems.push(arr);
                    arr = []; 
                }
            }
    
            this.content = videoItems.map((row, idx) => <VideoIndexContainer key={`${row}-${idx}`} videos={row}/>)
        } else {
            this.content = ((<div className="no-search-result">
                <h1>
                    Your search for "{this.props.searchStatus.query}" did not have any matches.
                </h1>
                <p>Suggestions:</p>
                <ul>
                    <li>Try different keywords</li>
                    <li>Looking for a movie or TV show?</li>
                    {/* <li>Try using a movie, TV show title, an actor or director</li>
                    <li>Try a genre, like animation, horror, live action, or education</li> */}
                </ul>
            </div>
            )
            )
        }

        return (
            <div className="search-page">
                {this.content}
            </div>
        )
    }
}

export default Search;
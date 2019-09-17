import React from 'react';
// import NavbarMainContainer from '../navbar/navbar_main_container';
import SearchVideoIndexContainer from './video/content/search_video_index_container';

class Search extends React.Component {
    componentDidMount() {
        if (!Object.keys(this.props.videos).length ||
            !Object.keys(this.props.genres).length) {
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }
    }

    render() {
        let content = (Object.keys(this.props.searchResults).length > 0) ?
            (<SearchVideoIndexContainer videos={this.props.searchResults} />) 
                :
            (<div className="no-search-result">
                <h1> 
                    Your search for {this.props.searchStatus.query} did not have any matches.
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

        // if (Object.keys(this.props.searchResults).length > 0) {
        //     content = (
        //         <VideoIndexContainer videos={this.props.searchResults} />
        //     )
        // } else {
        //     <h1>
        //         No results matching search.
        //     </h1>
        // }

        return (
            <div className="search-page">
                {/* <NavbarMainContainer/> */}
                {/* <div className='main-content'> */}
                    {/* <VideoIndexContainer videos={this.props.searchResults}/> */}
                {content}
                {/* </div> */}
            </div>
        )
    }
}

export default Search;
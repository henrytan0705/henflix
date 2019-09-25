import React from 'react';
import VideoIndexContainer from './video/content/video_index_container';

class MyList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     retrieveList: false
        // }
    }

    componentDidMount() {
        if (!Object.keys(this.props.videos).length ||
            !Object.keys(this.props.genres).length) {
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }

        if (!this.props.myList.fetched) {
            this.props.retrieveList();
        }
    }

    render() {
    
        if (Object.keys(this.props.myList).length > 0) {
            let videoItems = [];
            let arr = [];
            let videos = Object.values(this.props.myList);

            for (let i = 0; i < videos.length; i++) {
                arr.push(videos[i])

                if (arr.length === 6 || i === videos.length - 1) {
                    videoItems.push(arr);
                    arr = [];
                }
            }

            this.content = videoItems.map((row, idx) => <VideoIndexContainer key={`${row}-${idx}`} videos={row} />)
        } 

        return (
            <div className="list-page">
                {this.content}
            </div>
        )
    }
}

export default MyList;
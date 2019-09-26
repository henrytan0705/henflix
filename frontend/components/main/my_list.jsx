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
            !Object.keys(this.props.genres).length)
            // || !this.props.myList.fetched) 
            {
            this.props.retrieveVideos();
            this.props.retrieveGenres();

            // const promiseList = [this.props.retrieveVideos, this.props.retrieveGenres];
            // Promise.all([
            //     this.props.retrieveVideos(),
            //     this.props.retrieveGenres(),
            // ]).then(() => this.props.retrieveList() )

            // Promise.all(promiseList.map(ajax => ajax()))
            //     .then(() => this.props.retrieveList());
                
        }

    }

    render() {
        // debugger
    
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
                {/* <h1 className="text"> HELLO </h1> */}
            </div>
        )
    }
}

export default MyList;
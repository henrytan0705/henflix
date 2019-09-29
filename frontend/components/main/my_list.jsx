import React from 'react';
import VideoIndexContainer from './video/content/video_index_container';

class MyList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     retrieveList: false
        // }
        // this.state = {
        //     mounted: false
        // }
    }

    componentDidMount() {
        if (!Object.keys(this.props.videos).length ||
            !Object.keys(this.props.genres).length)
            // || !this.props.myList.fetched) 
            {
            this.props.retrieveVideos();
            this.props.retrieveGenres();
            // this.props.retrieveList();

            // const promiseList = [this.props.retrieveVideos, this.props.retrieveGenres];
            // Promise.all([
            //     this.props.retrieveVideos(),
            //     this.props.retrieveGenres(),
            // ]).then(() => this.props.retrieveList() )

            // Promise.all(promiseList.map(ajax => ajax()))
            //     .then(() => this.props.retrieveList());
        }
        // if (Object.values(this.props.myList).length === 1) {
            this.props.retrieveList();
        // }
        // this.setState({mounted: true});
    }

    render() {
        if (Object.values(this.props.myList).length === 1) {
            return null;
        } 
        
        let keys = Object.values(this.props.myList);

        if (Object.values(keys).length > 0) {
            let videoItems = [];
            let arr = [];
 
            for (let i = 0; i < keys.length; i++) {
                arr.push(keys[i])

                if (arr.length === 6 || i === keys.length - 2) {
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
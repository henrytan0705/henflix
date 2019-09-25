import React from 'react';

class MyList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        if (!Object.keys(this.props.videos).length ||
            !Object.keys(this.props.genres).length) {
            this.props.retrieveVideos();
            this.props.retrieveGenres();
        }

        if (!this.props.myList.fetched) {
            this.props.retrieveList(this.props.userId);
        }
    }

    render() {
        // if (!Object.values(this.props.videos).length || !Object.values(this.props.genres).length) return null;

        return (
            <div>
                {/* <h1 className="text">MY LIST PAGE</h1> */}
            </div>
        )
    }
}

export default MyList;
import React from 'react';

class VideoDescription extends React.Component {

    constructor(props) {
        super(props);
        this.content = null;
    }

    showDescription() {

    }

    hideDescription() {

    }

    render() {
        
        return (
            <div className="display-video-details show-description">
                {this.content}
                <h1>DESCRIPTION AREA</h1>
                <button onClick={this.hideDescription} 
                    className="close-description-button">
                    X
                </button>
            </div>
        )
    }
}

export default VideoDescription;
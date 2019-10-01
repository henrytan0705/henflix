import React from 'react';

class IndexItemButtons extends React.Component {



    render() {
        return (
            <div className="buttons-container">
                <i className="fas fa-volume-up item-mute-icon"
                        onClick={this.props.toggleMute}>
                </i>

            </div>
        )
    }
}

export default IndexItemButtons;
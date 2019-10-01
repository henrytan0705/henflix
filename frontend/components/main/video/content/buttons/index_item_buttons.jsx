import React from 'react';

class IndexItemButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onList: false,
            muted: false
        }
        this.toggleMute = this.toggleMute.bind(this);
        this.addVideo = this.addVideo.bind(this);
        this.removeVideo = this.removeVideo.bind(this);
        this.buttonType = this.buttonType.bind(this);
        this.volumeType;
    }

    toggleMute(e) {
        e.stopPropagation();
        this.props.vidRef.current.muted = !this.props.vidRef.current.muted;
        this.setState( { muted: !this.state.muted } );
    }

    addVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                return;
            }
        }

        Promise.all([this.props.addToList(this.props.video.id)])
            .then(() => this.props.retrieveList())

        this.setState({ onList: true })
    }

    removeVideo(e) {
        e.stopPropagation();
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                Promise.all([this.props.removeFromList(this.props.video.id)])
                    .then(() => this.props.retrieveList())
            }
        }
        this.setState({ onList: false })
    }

    buttonType() {
        let list = Object.values(this.props.myList);

        for (let i = 0; i < list.length; i++) {
            if (!!list[i].id && list[i].id === this.props.video.id) {
                this.listButton = (
                    <i class="fas fa-check-circle check-icon"
                        onClick={this.removeVideo}>
                    </i>
                )

                return;
            }
        }

        this.listButton = (
            <i className="fas fa-plus-circle add-icon"
                onClick={this.addVideo}>
            </i>
        )
    }


    render() {
        if (!this.state.muted) {
            this.volumeType = (
                <i className="fas fa-volume-up item-mute-icon"
                    onClick={this.toggleMute}>
                </i>
            )
        } else {
            this.volumeType = (
                <i className="fas fa-volume-mute item-mute-icon"
                    onClick={this.toggleMute}>
                </i>
            )
        }

        return (
            <div className="buttons-container">
                {this.volumeType}
            </div>
        )
    }
}

export default IndexItemButtons;
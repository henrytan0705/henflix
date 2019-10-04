# Henflix
[Henflix Live Site](https://henflix.herokuapp.com)

Henflix is a Netflix clone, a media streaming site, built using React/Redux for frontend and Ruby on Rails/PostgreSQL for backend. This site is hosted on Heroku and images/videos are hosted on AWS S3.

## Overview
* Secure user authentication for sign up/sign in with BCrypt.
* Demo login available for quick access to inner content of site
* Users can view trailers of videos by hovering over video thumbnails
* Video description is available upon clicking video thumbnail/drop down arrow of video trailer
* Users will be brought to a watch page upon clicking a video trailer
* Users can filter out videos according to TV Shows/Movies Categories when clicking on either genre tabs


# Features

## Dynamic Video Thumbnails

- Video index items have event listeners (onMouseEnter and onMouseLeave) to trigger the thumbnail to convert to a video and begin playing after hovering over it for 0.5 seconds. Else,the component remains as a thumbnail if you hover off.

![](./app/assets/images/dynamic_video_thumbnail.gif)

### Functions used to switch between thumbnail and video

    playTrailer(){
        if (this._mounted) {
            if (this.props.descriptionOpen) {
                return;
            }
            
            this.playId = setTimeout(
                function () {
                    if (this._mounted) {
                        this.setState({ hover: true });
                        this.setVideoToState(this.props.video);
    
                        if (!!this.props.previewVideo.currentTime) {
                            this.vidRef.current.currentTime = this.props.previewVideo.currentTime;
                        }
                    }
                }   
                .bind(this),
                500
            );  
        }
    }

    showThumbnail(){
        clearTimeout(this.playId);

        if (!this.props.descriptionOpen && this.state.hover) {
            this.props.receiveCurrentVideo(this.props.video, false, this.vidRef.current.currentTime);
        }

        if (this._mounted) this.setState({hover: false});
    }

### Event Listeners on Video Index Item Component

    <div 
                className="video-index-item"
                onMouseEnter= {this.playTrailer}
                onMouseLeave={this.showThumbnail}
                onClick={this.showDescription}
            >
                {this.content1}

        </div>




- Videos also continues playing from where it left off if you are consecutively hovering over the same video. 


## Future Features
* Genres List Dropdown
* Profiles
* Recently Added
* Watch Again
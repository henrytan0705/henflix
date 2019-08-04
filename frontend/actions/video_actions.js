import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

export const receiveVideos = (videos) => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

export const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

//////////

export const retrieveVideos = () => dispatch => {
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
}

export const retrieveVideo = id => dispatch => {
    return VideoAPIUtil.fetchVideo(id)
        .then(video => dispatch(receiveVideo(video)))
}
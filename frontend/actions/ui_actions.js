import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_CURRENT_VIDEO = "RECEIEVE_CURRENT_VIDEO";
export const CLEAR_VIDEO = "CLEAR_VIDEO";
export const RECEIVE_CURRENT_DESCRIPTION = "RECEIVE_CURRENT_DESCRIPTION";
export const CLEAR_DESCRIPTION = "CLEAR_DESCRIPTION";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS"

export const receiveCurrentVideo = (video, preview) => {
    return {
        type: RECEIVE_CURRENT_VIDEO,
        video,
        preview
    }
}
export const clearCurrentVideo = (preview) => {
    return {
        type: CLEAR_VIDEO,
        preview
    }
}

export const receiveCurrentDescription = (video) => {
    return {
        type: RECEIVE_CURRENT_DESCRIPTION,
        video
    }
}

export const clearDescription = () => {
    return {
        type: CLEAR_DESCRIPTION
    }
}

export const searchVideos = (videos) => {
    return {
        type: SEARCH_VIDEOS,
        videos
    }
}

export const retrieveSearch = (query) => dispatch => {
    return VideoAPIUtil.fetchSearch(query)
        .then(videos => dispatch(searchVideos(videos)))
}
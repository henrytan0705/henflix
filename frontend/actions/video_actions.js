import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS"
export const CLEAR_VIDEO = "CLEAR_VIDEO";
export const RECEIVE_CURRENT_VIDEO = "RECEIEVE_CURRENT_VIDEO";
export const RECEIVE_CURRENT_DESCRIPTION = "RECEIVE_CURRENT_DESCRIPTION";
export const CLEAR_DESCRIPTION = "CLEAR_DESCRIPTION";

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

export const receiveCurrentVideo = (video, preview) => {
    return {
        type: RECEIVE_CURRENT_VIDEO,
        video,
        preview
    }
}

export const receiveGenres = (genres) => {
    return {
        type: RECEIVE_GENRES,
        genres
    }
}

export const searchVideos = (videos) => {
    return {
        type: SEARCH_VIDEOS,
        videos
    }
}

export const clearCurrentVideo = (preview) => {
    return {
        type: CLEAR_VIDEO,
        preview
    }
}

export const receiveCurrentDescription = (video) => {
    // debugger
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


export const retrieveVideos = () => dispatch => {
    // debugger    
    return VideoAPIUtil.fetchVideos()
        .then(videos => dispatch(receiveVideos(videos)))
}

export const retrieveVideo = id => dispatch => {
    return VideoAPIUtil.fetchVideo(id)
        .then(video => dispatch(receiveVideo(video)))
}

export const retrieveGenres = () => dispatch => {
    return VideoAPIUtil.fetchGenres()
        .then(genres => dispatch(receiveGenres(genres)))
}

export const retrieveSearch = () => dispatch => {
    return VideoAPIUtil.fetchSearch(query)
        .then(videos => dispatch(searchVideos(videos)))
}
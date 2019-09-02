import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS"

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



export const retrieveVideos = () => dispatch => {
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
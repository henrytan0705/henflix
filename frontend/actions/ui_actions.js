import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_CURRENT_VIDEO = "RECEIEVE_CURRENT_VIDEO";
export const CLEAR_VIDEO = "CLEAR_VIDEO";
export const RECEIVE_CURRENT_DESCRIPTION = "RECEIVE_CURRENT_DESCRIPTION";
export const CLEAR_DESCRIPTION = "CLEAR_DESCRIPTION";
export const SEARCH_VIDEOS = "SEARCH_VIDEOS";
export const SEARCHING_FOR_VIDEOS = "SEARCHING_FOR_VIDEOS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const ADD_TO_LIST = "ADD_TO_LIST";

export const receiveCurrentVideo = (video, preview, time) => {
    return {
        type: RECEIVE_CURRENT_VIDEO,
        video,
        preview,
        time
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

export const searchingForVideos = (status, query) => {
    return {
        type: SEARCHING_FOR_VIDEOS,
        status,
        query
    }
}

export const receiveList = (list) => {
    return {
        type: RECEIVE_LIST,
        list
    }
}

// export const removeFromList = video => {
//     return {
//         type: REMOVE_FROM_LIST,

//     }
// }

// export const addToList = video => {
//     return {
//         type: ADD_TO_LIST,
//     }
// }


export const retrieveSearch = (query) => dispatch => {
    return VideoAPIUtil.fetchSearch(query)
        .then(videos => dispatch(searchVideos(videos)))
}

export const retrieveList = (id) => dispatch => {
    return VideoAPIUtil.fetchList(id)
        .then(videos => dispatch(receiveList(videos)))
}


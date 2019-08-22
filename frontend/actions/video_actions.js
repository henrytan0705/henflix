import * as VideoAPIUtil from '../utils/video_api_utils';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_GENRE_VIDEOS = "RECEIVE_GENRE_VIDEOS";

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

////////////////////////////////////////////////////////////////

// export const receiveGenreVideos = (videos) => {
//     return {
//         type: RECEIVE_GENRE_VIDEOS,
//         videos
//     }
// }

///////////

// export const retrieveGenreVideos = id => dispatch => {
//     return VideoAPIUtil.fetchGenreVideos(id)
//         .then(videos => dispatch(receiveGenreVideos(videos)))
// }
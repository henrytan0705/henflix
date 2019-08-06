export const fetchVideos = () => {
    return $.ajax({
        method: 'GET',
        url: "/api/videos"
    });
}

export const fetchVideo = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${id}`
    });
}

// export const fetchGenreVideos = (id) => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/genres/${id}`
//     })
// }


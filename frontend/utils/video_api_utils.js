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

export const fetchGenres = () => {
    return $.ajax({
        method: "GET",
        url: "/api/genres"
    })
}

export const fetchSearch = (query) => {
    return $.ajax({
        method: "GET",
        url: `/api/videos/search/${query}`,
    })
}
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

export const fetchList = () => {
    return $.ajax({
        method: "GET",
        url: `/api/lists/1`
    })
}

export const addList = id => {
    return $.ajax({
        method: "POST",
        url: "/api/lists",
        data: {
            id
        }
    })
}

export const deleteList = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/lists/${id}`
    })
}
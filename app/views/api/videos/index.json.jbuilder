@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :year
        json.genre video.genres[0].genre
        json.photoUrl url_for(video.photo)
        json.videoUrl url_for(video.video_url)
    end
end
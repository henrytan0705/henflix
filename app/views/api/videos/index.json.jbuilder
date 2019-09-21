@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :year
        json.genres video.genres.map{|vid| vid.genre}
        # json.genres video.genre_ids
        json.photoUrl url_for(video.photo)
        json.videoUrl url_for(video.video_url)
    end
end
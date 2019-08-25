# @genre_videos.each do |video|
#     json.set! video.id do
#         json.extract video, :id, :title, :description, :year, :genre_id
#         json.photoUrl url_for(video.photo)
#         json.videoUrl url_for(video.video_url)
#     end
# end

json.genre @genre.genre

# @genre.each do |genre|
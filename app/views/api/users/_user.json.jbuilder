json.extract! user, :id, :email

# json.list do
#     user.list_shows.each do |video|
#         json.set! video.id do 
#             json.extract! video, :id, :title, :description, :year
#             json.photoUrl url_for(video.photo)
#             json.videoUrl url_for(video.video_url)
#         end
#     end
# end


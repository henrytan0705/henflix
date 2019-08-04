json.extract! @video, :id, :title, :description, :year
json.photoUrl url_for(@video.photo)
json.videoUrl url_for(@video.video_url)

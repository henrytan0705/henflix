class Api::VideosController < ApplicationController
    def index
        @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres)
        render :index
    end

    def show
        @video = Video.find(params[:id])
       render :show
    end

    def search 
        title = params[:title]
        # debugger
        # @videos = Video.where('title ILIKE ?', "%#{title}%")
        
        # vids = Video.with_attached_photo.with_attached_video_url.all.includes(:genres)
        # @videos = vids.where('title ILIKE ?', "%#{title}%")

        # genres = vids.genres

        # for (i = 0; i < genres.length; i++) {

        # }

        @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres).where('title ILIKE ?', "%#{title}%")
        # .or('genres[0] ILIKE ?', "%#{title}%")
        # debugger
       
        if @videos.length == 0
            render json: {}
        else
            render "api/videos/search"
        end
    end

end
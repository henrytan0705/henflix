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
        query = params[:query]
        # debugger
        # @videos = Video.where('title ILIKE ?', "%#{title}%")
        
        # vids = Video.with_attached_photo.with_attached_video_url.all.includes(:genres)
        # @videos = vids.where('title ILIKE ?', "%#{title}%")

        # genres = vids.genres

        # for (i = 0; i < genres.length; i++) {

        # }

        # @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres).where('title ILIKE ?', "%#{title}%")
        
        # Video.with_attached_photo.with_attached_video_url.all.joins(:genres)
        @videos = Video.with_attached_photo.with_attached_video_url.all.joins(:genres).distinct.where('title ILIKE ? OR genre ILIKE ?', "%#{query}%", "#{query}")
        # debugger

        if @videos.length == 0
            render json: {}
        else
            render "api/videos/search"
        end
    end

end
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
        # @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres).where('title ILIKE ?', "%#{title}%")
        @videos = Video.with_attached_photo.with_attached_video_url.all.joins(:genres).distinct.where('title ILIKE ? OR genre ILIKE ?', "%#{query}%", "#{query}").distinct

        if @videos.length == 0
            render json: {}
        else
            # render "api/videos/search"
            render :search
        end
    end

end
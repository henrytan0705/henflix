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
        @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres).where('title ILIKE ?', "%#{title}%")
        if @videos.nil?
            render json: 'Search returned no results'
        else
            render "api/videos/search"
        end
    end

end
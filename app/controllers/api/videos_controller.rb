class Api::VideosController < ApplicationController
    def index
        @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres)
        render :index
    end

    def show
        @video = Video.find(params[:id])
        # debugger
       render :show
    end

    def search 
        title = params[:title]
        @videos = Video.where('title iLIKE ?', "%#{title}%")

        if @videos.nil?
            render json: 'Search returned no results'
        else
            render "api/movies/index")
        end
    end

end
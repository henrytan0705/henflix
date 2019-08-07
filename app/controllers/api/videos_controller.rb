class Api::VideosController < ApplicationController
    def index
        @videos = Video.with_attached_photo.with_attached_video_url.all.includes(:genres)
        render :index
    end

    def show
       @video = Video.find(params[:id])
       render :show
    end
end
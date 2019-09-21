class Api::ListsController < ApplicationController
    # def index #show all lists
    #     @lists = List.all
    #     render :index
    # end

    def show #show videos in list
        @videos = User.where(id: current_user.id)[0].list_shows.with_attached_photo.with_attached_video_url
        render :show
    end 

    def create #add video to list
        
    end

    def destroy #remove video from list

    end
end
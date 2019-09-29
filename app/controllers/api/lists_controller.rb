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
        video_id = Integer(params[:id])

        if List.create(user_id: current_user.id, video_id: video_id)
            @videos = User.where(id: current_user.id)[0].list_shows.with_attached_photo.with_attached_video_url
            render :show
        else
            render json ["Fail to add video to list"]
        end
    end
    
    def destroy #remove video from list
        video_id = Integer(params[:id])
        search = List.where(user: current_user.id).where(video_id: video_id)[0].destroy
        @videos = User.where(id: current_user.id)[0].list_shows.with_attached_photo.with_attached_video_url

        render :show
        
    end

    def list_params
        params.require(:list).permit(:user, :video_id)
    end
end
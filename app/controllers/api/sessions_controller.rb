class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email,],
            params[:user][:password])

        if @user 
            login!(@user)
            render "api/users/show"
        else
            # debugger
            # render json: ["Invalid Credentials"], status: 422
            render json: ["Please enter a valid email or phone number.", "Your password must contain between 6 and 60 characters."], status: 422
            # render "api/users/error"
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: current_user.error.full_messages, status: 404
        end
    end

end
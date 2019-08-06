class Api::GenresController < ApplicationController
    def show
        @genre = Genre.find(params[:id])
        render :show
    end
end
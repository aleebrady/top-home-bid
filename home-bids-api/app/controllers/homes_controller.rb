class HomesController < ApplicationController

    def index 
        @homes = Home.all 
        render json: @homes, include: :bids
    end

    def destroy
        @home = Home.find(params[:id])
        if @home.destroy 
            head :no_content 
        else
            render json: @home.errors, status: :conflict
        end
    end

end

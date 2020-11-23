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

    def create
        @home = Home.new(home_params)

        if @home.save
            render json: @home, status: :created, location: @home
        else
            render json: @home.errors, status: :unprocessable_entity
        end
    end

    private
    
    # Only allow a trusted parameter "white list" through.
    def home_params
      params.require(:home).permit(:city, :area, :year_built)
    end

end

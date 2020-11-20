class HomesController < ApplicationController

    def index 
        @homes = Home.all 
        render json: @homes, include: :bids
    end

end

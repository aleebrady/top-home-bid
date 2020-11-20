class HomesController < ApplicationController

    def index 
        @homes = Home.all 
        render json: @homes
    end

end

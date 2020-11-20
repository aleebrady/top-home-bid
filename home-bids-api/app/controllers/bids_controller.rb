class BidsController < ApplicationController

    def index
        @bids = Bid.all 
        render json: @bids
    end

end

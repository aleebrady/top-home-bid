class BidsController < ApplicationController

    def index
        @bids = Bid.all 
        render json: @bids
    end

    def show
        render json: @bid
    end

    def create
        @bid = Bid.new(bid_params)

        if @bid.save
            render json: @bid, status: :created, location: @bid
        else
            render json: @bid.errors, status: :unprocessable_entity
        end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_bid
      @bid = Bid.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bid_params
      params.require(:bid).permit(:agent, :offer, :home_id)
    end

end

class Home < ApplicationRecord
    has_many :bids, :dependent => :delete_all
end

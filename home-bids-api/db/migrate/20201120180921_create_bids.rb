class CreateBids < ActiveRecord::Migration[6.0]
  def change
    create_table :bids do |t|
      t.string :agent
      t.integer :offer
      t.belongs_to :home, null: false, foreign_key: true

      t.timestamps
    end
  end
end

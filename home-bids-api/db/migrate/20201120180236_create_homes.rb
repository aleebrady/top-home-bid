class CreateHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :homes do |t|
      t.string :city
      t.string :area
      t.integer :year_built

      t.timestamps
    end
  end
end

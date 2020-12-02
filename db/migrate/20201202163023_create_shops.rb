class CreateShops < ActiveRecord::Migration[6.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :type
      t.string :address
      t.string :borough
      t.string :image
      t.string :phone_number
      t.string :website

      t.timestamps
    end
  end
end

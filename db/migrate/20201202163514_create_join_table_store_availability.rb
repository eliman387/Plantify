class CreateJoinTableStoreAvailability < ActiveRecord::Migration[6.0]
  def change
    create_join_table :stores, :plants do |t|
      t.index [:store_id, :plant_id]
      t.index [:plant_id, :store_id]
    end
  end
end

class CreateJoinTablePlantShopAvailability < ActiveRecord::Migration[6.0]
  def change
    create_join_table :plants, :shops do |t|
      t.index [:plant_id, :shop_id]
      t.index [:shop_id, :plant_id]
    end
  end
end

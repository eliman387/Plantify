class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :commmon_name
      t.string :botanical_name
      t.string :picture
      t.string :size
      t.string :difficulty_level
      t.string :light
      t.string :pet_friendly

      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :favorited_plants
      t.string :favorited_stores
      t.boolean :isAdmin

      t.timestamps
    end
  end
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_03_174858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plants", force: :cascade do |t|
    t.string "common_name"
    t.string "botanical_name"
    t.string "picture"
    t.string "size"
    t.string "difficulty_level"
    t.string "light"
    t.string "pet_friendly"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "plants_shops", id: false, force: :cascade do |t|
    t.bigint "plant_id", null: false
    t.bigint "shop_id", null: false
    t.index ["plant_id", "shop_id"], name: "index_plants_shops_on_plant_id_and_shop_id"
    t.index ["shop_id", "plant_id"], name: "index_plants_shops_on_shop_id_and_plant_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name"
    t.string "sub_type"
    t.string "address"
    t.string "borough"
    t.string "image"
    t.string "phone_number"
    t.string "website"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "isAdmin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

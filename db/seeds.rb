# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Shop.delete_all
Plant.delete_all
##Users

@user0 = User.create(username: 'admin', email: 'eliman387@gmail.com', password: '12345678', isAdmin: true)

##Shops

#Brooklyn
@shop1 = Shop.create(name: 'Seasons', sub_type: 'Nursery / Garden', address: '358 Stuyvesant Ave, Brooklyn, NY 11233', borough: 'Brooklyn', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/OFZQq_eSdAGWXbG-Hwkl7w/o.jpg', phone_number: '(347) 770-5053', website: 'http://www.seasonsbedstuy.com')
@shop2 = Shop.create(name: 'Nelly\'s Flowers And Plants', sub_type: 'Plant Shop', address: '501 Broadway, Brooklyn, NY 11211', borough: 'Brooklyn', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/U2lI-2CFIbAozi4UBe2CmA/o.jpg', phone_number: '(718) 963-4062', website: 'http://www.nellysflowershop.com')
@shop3 = Shop.create(name: 'Tula Plants & Design', sub_type: 'Plant Shop', address: '59 Meserole Ave, Brooklyn, NY 11222', borough: 'Brooklyn', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/_aeCERpWAg58Rexfd1IjfA/o.jpg', phone_number: '(718) 389-0530', website: 'https://www.tula.house')
@shop4 = Shop.create(name: 'Natty Garden', sub_type: 'Nursery / Garden', address: '636 Washington Ave, Brooklyn, NY 11238', borough: 'Brooklyn', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/B5YraVKRgnQybQobvT89Zw/o.jpg', phone_number: '(718) 483-8833', website: 'http://www.nattygarden.com')
@shop5 = Shop.create(name: 'Chelsea Garden Center Red Hook', sub_type: 'Nursery / Garden', address: '444 Van Brunt St, Brooklyn, NY 11231', borough: 'Brooklyn', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/xHXyMraloCWXMyS8AtbamQ/o.jpg', phone_number: '(718) 875-2100', website: 'http://www.chelseagardencenter.com')

#Queens
@shop6 = Shop.create(name: 'Verni’s Garden Center', sub_type: 'Nursery / Garden', address: '22-22 Hazen St, Flushing, NY 11370', borough: 'Queens', image: 'https://lh3.googleusercontent.com/proxy/Joe-MHIPep982Rb0YXTT0WB5NO8GVMfg-6ykRV8G8lh_zNIRRqcf5HnaOmfzQuxdb1L4hl6dqoXNu2yiY_dDeXto0qCbycWzwao9Oqgd0AVmqhrQzPfsDi6DAuuwjjEY0kq-Ga7e', phone_number: '(718) 278-7348', website: 'https://www.vernisgardencenter.com')
@shop7 = Shop.create(name: 'Little Shop of Soil', sub_type: 'Plant Shop', address: '788 Woodward Ave, Queens, NY 11385', borough: 'Queens', image: 'https://www.littleshopofsoil.com/uploads/b/2038c320d6ca139ac04f8299c93a154e5dddfd5b3d213b66ae6b51d9e63e8ca1/IMG_4164_1593697033.JPG?width=1200', phone_number: '(518) 984-3257', website: 'https://www.littleshopofsoil.com')
@shop8 = Shop.create(name: 'Garden World', sub_type: 'Nursery / Garden', address: '46-20 Francis Lewis Blvd, Queens, NY 11358', borough: 'Queens', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/CdLPwquRJ9p6Q1AM-SNYwA/o.jpg', phone_number: '(718) 224-6789', website: 'https://www.nygardenworld.com')

#Manhattan
@shop9 = Shop.create(name: 'PlantShed', sub_type: 'Plant Shop', address: '555 Columbus Ave, New York, NY 10024', borough: 'Manhattan', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/JwQEgRIDN2IccFoHpTloMQ/o.jpg', phone_number: '(212) 662-4400', website: 'https://www.plantshed.com')
@shop10 = Shop.create(name: 'The Sill', sub_type: 'Plant Shop', address: '448 Amsterdam Ave, New York, NY 10024', borough: 'Manhattan', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4tnZTZQqtanpvr82laWcyg/o.jpg', phone_number: '(646) 899-40153', website: 'https://www.thesill.com')
@shop11 = Shop.create(name: 'Urban Garden Center', sub_type: 'Nursery / Garden', address: '1640 Park Ave, New York, NY 10035', borough: 'Manhattan', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/7NCs-fQ4y9wU6osRpLx1fw/o.jpg', phone_number: '(646) 872-3991', website: 'https://www.urbangardennyc.com')
@shop12 = Shop.create(name: 'Foliage Paradise', sub_type: 'Plant Shop', address: '113 W 28th St, New York, NY 10001', borough: 'Manhattan', image: 'http://www.paradiseplantsny.com/images/slider02-crop-u43819.jpg?crc=347707401', phone_number: '(212) 675-9696', website: 'https://www.paradiseplantsny.com')
@shop13 = Shop.create(name: 'Saifee Hardware & Garden', sub_type: 'Plant Shop', address: '114 1st Avenue, New York, NY 10009', borough: 'Manhattan', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/2w7f0kjWxfmKYAr_luchhQ/o.jpg', phone_number: '(212) 979-6396', website: 'https://www.saifeehardware.com')

#Bronx
@shop14 = Shop.create(name: 'NYBG Shop', sub_type: 'Plant Shop', address: '2900 Southern Blvd, Bronx, NY 10458', borough: 'Bronx', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/OFZQq_eSdAGWXbG-Hwkl7w/o.jpg', phone_number: '(718) 817-8073', website: 'https://www.nybgshop.org')

#Staten Island
@shop15 = Shop.create(name: 'Sweetbrook Nursery & Garden Center', sub_type: 'Nursery / Garden', address: '2371 Forest Ave, Staten Island, NY 10303', borough: 'Staten Island', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/IV6LFEOh4J0ktoJrDavydg/o.jpg', phone_number: '(718) 448-5661', website: 'https://www.sweetbrookgardencenter.com')
@shop16 = Shop.create(name: 'Wiesner Bros Nursery', sub_type: 'Nursery / Garden', address: '2402 Victory Blvd, Staten Island, NY 10314', borough: 'Staten Island', image: 'https://s3-media0.fl.yelpcdn.com/bphoto/JAoXNlk0xSr3U_z91YMSxQ/o.jpg', phone_number: '(718) 761-5141', website: 'https://www.wiesnerbros.com')


##Plants
@plant1 = Plant.create(common_name: 'Bird of Paradise', botanical_name: 'Strelitzia nicolai', picture: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_bird-of-paradise_slate.jpg?ver=279493', size: 'Extra Large — 43" to 53" tall', difficulty_level: 'Easy', light: 'Partial to Bright', pet_friendly: false)
@plant2 = Plant.create(common_name: 'Bamboo Palm', botanical_name: 'Chamaedorea seifrizii', picture: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_bamboo-palm_indigo.jpg?ver=279482', size: 'Extra Large — 44"-58" tall', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: true)
@plant3 = Plant.create(common_name: 'Money Tree', botanical_name: 'Pachira aquatica', picture: 'https://bloomscape.com/wp-content/uploads/2019/11/bloomscape_detail_money-tree.jpg?ver=94573', size: 'Large — 32”-40” tall', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: true)
@plant4 = Plant.create(common_name: 'Monstera', botanical_name: 'Monstera deliciosa', picture: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_monstera_charcoal.jpg?ver=279418', size: 'Large — 26"-32" tall, 20"-26" wide', difficulty_level: 'Easy', light: 'Partial to Bright ', pet_friendly: false)
@plant5 = Plant.create(common_name: 'Chinese Fan Palm', botanical_name: 'Livistona chinensis', picture: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/3/d/b/0/15792.Jpg', size: 'Extra Large — 44”- 58” tall', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: true)
@plant6 = Plant.create(common_name: 'Kimberly Queen Fern', botanical_name: 'Nephrolepis obliterata', picture: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_kimberly-queen-fern_detail.jpg?ver=279239', size: 'Medium — 14"-20" tall', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: true)
@plant7 = Plant.create(common_name: 'Corn Plant', botanical_name: 'Dracaena deremensis ‘warneckii ulyses’', picture: 'https://www.plantvine.com/plants/Corn-Plant-LArge-2.jpg', size: 'Extra Large — 44"-54" tall', difficulty_level: 'Easy', light: 'Low to Partial ', pet_friendly: false)
@plant8 = Plant.create(common_name: 'Snake Plant', botanical_name: 'Sansevieria ‘sayuri’', picture: 'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_sansevieria-sayuri_detail.jpg?ver=279454', size: 'Large — 26"-34" tall', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: false)
@plant9 = Plant.create(common_name: 'Neon Prayer Plan', botanical_name: 'Maranta leuconeura “marisela”', picture: 'https://bloomscape.com/wp-content/uploads/2020/09/bloomscape_neon-prayer-plant_detail.jpg?ver=292321', size: 'Medium — 10” - 15”', difficulty_level: 'Easy', light: 'Low to Partial', pet_friendly: true)
@plant10 = Plant.create(common_name: 'Fiddle Leaf Fig', botanical_name: 'Ficus lyrata', picture: 'https://images.neimanmarcus.com/ca/6/product_assets/H/B/B/4/T/NMHBB4T_mz.jpg', size: 'Extra Large — 44"-58" tall', difficulty_level: 'Moderate — Needs a bit of extra care', light: 'Medium — Bright indirect light', pet_friendly: false)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all
Genre.destroy_all
VideoGenre.destroy_all

User.create!(email: "henry@gmail.com", password:"asdf1234")
User.create!(email: "danieldog@gmail.com", password:"asdf1234")
User.create!(email: "lillian@gmail.com", password:"lillian")
User.create!(email: "george@gmail.com", password:"asdf1234")
User.create!(email: "max@gmail.com", password:"12345678")
User.create!(email:"demoLogin@gmail.com" ,password:"asdf1234")

angry_bird = Video.create!(title:"The Angry Birds Movie 2", description:"The flightless birds and scheming green pigs take their feud to the next level.", year:"2019")
photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/the_angry_birds_movie.jpg")
video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/angry_birds_2.mp4")
angry_bird.photo.attach(io: photo, filename:"angry_birds_2.jpg")
angry_bird.video_url.attach(io: video, filename:"angry_birds_2.mp4")

rio = Video.create!(title:"Rio", description:"When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.", 
year:"2011")
rio_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/rio.jpg")
rio_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/rio.mp4")
rio.photo.attach(io: rio_photo, filename:"rio.jpg")
rio.video_url.attach(io: rio_video, filename:"rio.mp4")

master_chef_junior = Video.create!(title:"Master Chef Junior", description:"Children who love to cook get a chance to become a MasterChef.", year: "2018")
master_chef_junior_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/master_chef_junior.jpg")
master_chef_junior_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/master_chef_junior.mp4")
master_chef_junior.photo.attach(io: master_chef_junior_photo, filename:"master_chef_junior.jpg")
master_chef_junior.video_url.attach(io: master_chef_junior_video, filename:"master_chef_junior.mp4")

tasty = Video.create!(title:"Tasty - 7 Easy Chicken Dinners", description:"7 Easy Chicken Dinners", year:"2016")
tasty_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/tasty.jpg")
tasty_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/tasty.mp4")
tasty.photo.attach(io: tasty_photo, filename:"tasty.jpg")
tasty.video_url.attach(io: tasty_video, filename:"tasty.mp4")

chicken_little = Video.create(title:"Chicken Little", description:"No one believes Chicken Little when he tried to warn of an alien invasion -- so it's up to him and his misfit friends to save the world!", year:"2005")
chicken_little_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chicken_little.jpg")
chicken_little_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/Chicken+Little+(2005)+Trailer.mp4")
chicken_little.photo.attach(io: chicken_little_photo, filename:"chicken_little.jpg")
chicken_little.video_url.attach(io:chicken_little_video, filename:"chicken_little.mp4")

chicken_run = Video.create!(title:"Chicken Run", description:"When a cockerel apparently flies into a chicken farm, the chickens see him as an opportunity to escape their evil owners.", year:"2000")
chicken_run_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chicken_run.jpg")
chicken_run_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chicken_run.mp4")
chicken_run.photo.attach(io: chicken_run_photo, filename:"chicken_run.jpg")
chicken_run.video_url.attach(io: chicken_run_video, filename:"chicken_run.mp4")

eggs_change = Video.create!(title:"Eggs Change", description:"A mother chicken is threatened by the farmer’s wife to take her eggs. She manages to get an egg from the chicken, but in the end and the chicken has a trick of her own", year:"2016")
eggs_change_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/eggs_change.jpg")
eggs_change_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/eggs_change.mp4")
eggs_change.photo.attach(io: eggs_change_photo, filename:"eggs_change.jpg")
eggs_change.video_url.attach(io: eggs_change_video, filename: "eggs_change.mp4")

hen_and_chicken = Video.create!(title:"Hen and Chickens", description:"Hens and Chickens", year:"2016")
hen_and_chicken_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/hen_and_chickens.jpg")
hen_and_chicken_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/hen_and_chickens.mp4")
hen_and_chicken.photo.attach(io: hen_and_chicken_photo, filename:"hen_and_chicken.jpg")
hen_and_chicken.video_url.attach(io: hen_and_chicken_video, filename:"hen_and_chicken.mp4")

chicken_embryo_development = Video.create!(title:"Chicken Embryo Development", description:"Animation of the 21 day development of a chicken embryo in the egg.", year:"2014")
chicken_embryo_development_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chicken_embry_development.jpg")
chicken_embryo_development_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chicken_embryo_development.mp4")
chicken_embryo_development.photo.attach(io: chicken_embryo_development_photo , filename:"chicken_embry_development.jpg")
chicken_embryo_development.video_url.attach(io: chicken_embryo_development_video, filename:"chicken_embry_development.mp4")

chick_hatching = Video.create!(title:"Chicken Hatching", description:"Video showing chicken hatching from an egg.🐤🐤🐤🐤", year:"2017")
chick_hatching_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chick_hatching.jpg")
chick_hatching_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/chick_hatching.mp4")
chick_hatching.photo.attach(io: chick_hatching_photo , filename:"chick_hatching.jpg")
chick_hatching.video_url.attach(io: chick_hatching_video, filename:"chick_hatching.mp4")

tasty_2 = Video.create!(title:"Homemade Chicken Tikka Masala" , description:"Homemade Chicken Tikka Masala Recipe", year:"2017")
tasty_2_photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/homemade_chicken_tikka_masala.jpg")
tasty_2_video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/homemade_chicken_tikka_masala.mp4")
tasty_2.photo.attach(io: tasty_2_photo, filename:"tasty_2.jpg")
tasty_2.video_url.attach(io: tasty_2_video, filename:"tasty_2.mp4")

# Video.create!(title:"" , description:"", year:"")
# EzDownload.open()
# EzDownload.open()
# .photo.attach(io: ,filename:"")
# .video_url.attach(io: ,filename:"")

animation = Genre.create!(genre:"Animation")
food = Genre.create!(genre:"Food")
horror = Genre.create!(genre:"Horror")
live_action = Genre.create!(genre:"Live Action")
educational = Genre.create!(genre:"Educational")
tv_show = Genre.create!(genre:"TV Show")
movie = Genre.create!(genre:"Movie")

VideoGenre.create!(genre: animation , movie: angry_bird)
VideoGenre.create!(genre: movie , movie: angry_bird)

VideoGenre.create!(genre: animation , movie: rio)
VideoGenre.create!(genre: movie , movie: rio)

VideoGenre.create!(genre: animation , movie: chicken_little)
VideoGenre.create!(genre: movie , movie: chicken_little)

VideoGenre.create!(genre: animation , movie: chicken_run)
VideoGenre.create!(genre: movie , movie: chicken_run)

VideoGenre.create!(genre: animation , movie: eggs_change)
VideoGenre.create!(genre: tv_show , movie: eggs_change)

VideoGenre.create!(genre: food, movie: master_chef_junior)
VideoGenre.create!(genre: tv_show, movie: master_chef_junior)
VideoGenre.create!(genre: horror, movie:master_chef_junior)

VideoGenre.create!(genre: food, movie: tasty)
VideoGenre.create!(genre: tv_show, movie: tasty)
VideoGenre.create!(genre: horror, movie:tasty)

VideoGenre.create!(genre: food, movie: tasty_2)
VideoGenre.create!(genre: tv_show, movie: tasty_2)
VideoGenre.create!(genre: horror, movie:tasty_2)

VideoGenre.create!(genre: live_action, movie:hen_and_chicken)
VideoGenre.create!(genre: tv_show, movie:hen_and_chicken)

VideoGenre.create!(genre: live_action, movie:chick_hatching)
VideoGenre.create!(genre: tv_show, movie:chick_hatching)

VideoGenre.create!(genre: educational, movie:chicken_embryo_development)
VideoGenre.create!(genre: tv_show, movie:chicken_embryo_development)


# Genre.create(genre:"") 
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")

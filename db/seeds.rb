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


angry_bird = Video.create!(title:"The Angry Birds Movie 2", description:"Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine way of life. After picking their best and brightest, the birds and pigs come up with a scheme to infiltrate the island, deactivate the device and return to their respective paradises intact.", year:"2019")
photo = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/the_angry_birds_movie.jpg")
video = EzDownload.open("https://active-storage-aa-seed.s3.amazonaws.com/angry_birds_2.mp4")
angry_bird.photo.attach(io: photo, filename:"angry_birds_2.jpg")
angry_bird.video_url.attach(io: video, filename:"angry_birds_2.mp4")


rio = Video.create!(title:"Rio", description:"In Brazil, various exotic birds are smuggled out of the country. In Moose Lake, Minnesota, a crate with a male Spix's macaw hatchling falls out of a truck and is found by a little girl named Linda Gunderson, who names him Blu. Over the next 15 years,[7] Linda comes to own a bookstore. Highly domesticated and unable to fly because he is scared to, Blu is ridiculed frequently by the Canada geese that come by outside of Linda's bookstore.
One day, ornithologist Túlio Monteiro invites Blu and Linda to Rio de Janeiro because Blu, who is the last known male of his species, needs to mate with the last known female macaw. Linda initially refuses, but later accepts and they fly to Rio. At Túlio's aviary, Blu meets Jewel, a fiercely independent Spix's macaw female longing to flee back to the wilderness. The macaws are captured by Fernando, an orphaned boy, and a sulphur-crested cockatoo named Nigel, both of whom work for a group of smugglers led by Marcel, who wants to leave the country as soon as possible to secure a black market deal regarding Blu and Jewel.
While Fernando has second thoughts about his actions, Nigel tells the macaws that he desires to exact revenge on 'pretty birds' after his role on a television program had been ruined by one. However, because of Blu's familiarity with cages, they flee into the jungle. Fernando meets Linda and Túlio and helps them find the birds, while Blu and Jewel meet Rafael, a toco toucan, who offers to take them to his bulldog friend, Luiz, to remove their leg chain.", 
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

chicken_run = Video.create!(title:"Chicken Run", description:"The chickens live in a farm run by The Tweedys. They try to escape, but are always caught. Frustrated at the minuscule profits that the farm generates, Mrs. Tweedy conceives an idea of converting the farm into automated production and having a pie machine in the barn in order to turn the chickens into pies. One day, Ginger, the leader of the chickens, observes a rooster crash-landing into the farm after being shot from a circus cannon. Ginger and the chickens hide him from The Tweedys and learn his name is Rocky. Ginger, interested in Rocky's flying abilities, begs him to help train her and the other chickens to fly. Rocky helps them, but in the meantime only gives them training lessons. Meanwhile, Mr. Tweedy builds the pie machine.
Later Rocky holds a party and Ginger insists he show them to fly the next day, but Mr. Tweedy finishes making the pie machine and puts Ginger in it for a test run. Rocky saves Ginger, giving them time to warn the others of The Tweedys' plan to make them into pies and only a short time for their escape. The next day, Ginger finds Rocky has fled, leaving behind part of a poster that shows him to be a stunt rooster, shot out of a cannon from a circus and unable to fly himself, depressing Ginger and the others. Fowler the rooster tries to cheer them by telling stories of the RAF, leading Ginger the idea of creating a plane to flee from the farm. The chickens assemble parts for the plane as Mrs. Tweedy insists Mr. Tweedy gather all the chickens to put into the machine, but when he comes in, the chickens attack Mr. Tweedy and gag him up as they finish the plane. Rocky returns and joins them, but whilst taking off, Mrs. Tweedy chases them down and grabs onto a strand. Mrs. Tweedy climbs it while Ginger races to sever it, managing to cut the strand, sending Mrs. Tweedy into the pie machine, causing it to explode. The chickens continue their flight to freedom, while Mr. Tweedy tells his wife he told her the chickens are organised. Mrs. Tweedy growls in rage, but Mr. Tweedy has enough of her abuse so he pushes the door down onto her for revenge. The chickens find an island where they enjoy their freedom, and Ginger and Rocky start a relationship.", year:"2000")
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
live_action = Genre.create!(genre:"Live Action")
educational = Genre.create!(genre:"Educational")

VideoGenre.create!(genre: animation , movie: angry_bird)
VideoGenre.create!(genre: animation , movie: rio)
VideoGenre.create!(genre: animation , movie: chicken_little)
VideoGenre.create!(genre: animation , movie: chicken_run)
VideoGenre.create!(genre: animation , movie: eggs_change)

VideoGenre.create!(genre: food, movie: master_chef_junior)
VideoGenre.create!(genre: food, movie: tasty)
VideoGenre.create!(genre: food, movie: tasty_2)

VideoGenre.create!(genre: live_action, movie:hen_and_chicken)
VideoGenre.create!(genre: live_action, movie:chick_hatching)

VideoGenre.create!(genre: educational, movie:chicken_embryo_development)


# Genre.create(genre:"") 
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")

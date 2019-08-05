# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "henry@gmail.com", password:"asdf1234")
User.create(email: "danieldog@gmail.com", password:"asdf1234")
User.create(email: "lillian@gmail.com", password:"lillian")
User.create(email: "george@gmail.com", password:"asdf1234")
User.create(email: "max@gmail.com", password:"12345678")
User.create(email:"demoLogin@gmail.com" ,password:"asdf1234")

# chickenLittle = Video.create(title:"Chicken Little", description:"No one believes Chicken Little when he tried to warn of an alien invasion -- so it's up to him and his misfit friends to save the world!", year:"2005", genre_id:1)
# chickenLittle.photo.attach(io: File.open("/Users/henry/Desktop/fullstack/henflix/app/assets/images/chicken_little.jpg"))
# chickenLittle.video_url.attach(io:)

angryBird = Video.create(title:"The Angry Birds Movie 2", description:"Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine way of life. After picking their best and brightest, the birds and pigs come up with a scheme to infiltrate the island, deactivate the device and return to their respective paradises intact.", year:"2019", genre_id:1)
# angryBird.photo.attach(io: File.open("/Users/henry/Desktop/fullstack/henflix/app/assets/images/the_angry_birds_movie.jpg"), filename:"angry_birds_2.jpg")
# angryBird.video_url.attach(io: File.open("/Users/henry/Desktop/VIDEOS/angry_birds_2.mp4"), filename:"angry_birds_2.mp4")

Genre.create(genre:"Animation")
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")

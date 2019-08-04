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

Video.create(title:"Chicken Little", description:"No one believes Chicken Little when he tried to warn of an alien invasion -- so it's up to him and his misfit friends to save the world!", year:"2005", genre_id:1)


Genre.create(genre:"Animation")
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")
# Genre.create(genre:"")

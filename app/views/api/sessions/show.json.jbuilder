# json.partial! "api/users/user", user: @user
json.extract! @user, id, :email
josn.list Array.new
json.set! user.id do
    json.extract! user, :id, :email
    json.list Array.new
end
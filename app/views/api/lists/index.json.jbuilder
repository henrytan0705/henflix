@lists.each do |list|
    json.set! list.id do 
        json.user_id list.user.id
        json.videos list.video
    end
end
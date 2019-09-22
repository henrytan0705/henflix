@genres.each do |genre|
    json.set! genre.id do
        json.extract! genre, :id, :genre, :video_ids
    end
end


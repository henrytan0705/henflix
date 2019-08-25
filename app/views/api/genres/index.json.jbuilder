@genres.each do |genre|
    json.set! genre.id do
        # debugger
        json.extract! genre, :id, :genre, :videos
    end
end


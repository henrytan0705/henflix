class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :videos,
        foreign_key: :video_genre_id,
        class_name: :VideoGenre

    has_many :movies,
        through: :videos,
        source: :movie

    
end
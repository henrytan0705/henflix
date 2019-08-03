class Video < ApplicationRecord
    validates :title, :description, :year, :genre_id, presence: true
    validates :title, uniqueness: true

    belongs_to :video_genre,
        foreign_key: :genre_id,
        class_name: :Genre

    has_one_attached :photo 
        
end
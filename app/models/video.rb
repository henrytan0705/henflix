class Video < ApplicationRecord
    validates :title, :description, :year, presence: true
    validates :title, uniqueness: true

    has_many :video_genres,
        foreign_key: :movie_id,
        class_name: :VideoGenre

    has_many :genres,
        through: :video_genres,
        source: :genre
    
    has_one_attached :photo

    has_one_attached :video_url
    
    has_many :lists,
        foreign_key: :video_id,
        class_name: :List

    has_many :list_users,
        through: :lists,
        source: :user
end
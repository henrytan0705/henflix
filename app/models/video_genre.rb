class VideoGenre < ApplicationRecord
    # validates :video_genre_id, :movie_id

    belongs_to :genre,
        foreign_key: :video_genre_id,
        class_name: :Genre

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Video

end
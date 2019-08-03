class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :videos
end
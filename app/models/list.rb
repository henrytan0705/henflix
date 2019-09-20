class List < ApplicationRecord
    belongs_to :videos,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
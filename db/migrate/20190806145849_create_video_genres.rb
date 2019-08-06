class CreateVideoGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :video_genres do |t|
      t.integer :video_genre_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
  end
end

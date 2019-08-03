class AddColumnVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :genre_id, :integer
  end
end

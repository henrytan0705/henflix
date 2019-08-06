class RemoveVideoColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :genre_id
  end
end

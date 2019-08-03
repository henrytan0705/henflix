class EditVideoColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :genre_id, :integer
    add_column :videos, :genre_id, :integer, null: false
  end
end

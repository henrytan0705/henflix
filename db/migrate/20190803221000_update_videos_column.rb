class UpdateVideosColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :videos, :genre_id, :integer, null: true
  end
end

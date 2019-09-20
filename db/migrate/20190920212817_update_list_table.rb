class UpdateListTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :lists, :user_id
    add_index :lists, :user_id
    add_index :lists, :video_id
    add_index :lists, [:user_id, :video_id], unique: true
  end
end

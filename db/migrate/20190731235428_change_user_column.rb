class ChangeUserColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :email, :string, null: false, unique: true
  end
end

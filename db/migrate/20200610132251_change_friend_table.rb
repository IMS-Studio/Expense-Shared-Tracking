class ChangeFriendTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :friends, :friend_is, :friend_id
  end
end

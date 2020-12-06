class ChangeFriendsTableAgain < ActiveRecord::Migration[5.2]
  def change
    rename_column :friends, :author_id, :requestor_id
    rename_column :friends, :friend_id, :requested_id
  end
end

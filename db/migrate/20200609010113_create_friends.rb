class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :author_id, null: false
      t.integer :friend_is, null: false
      
      t.timestamps
    end
  end
end

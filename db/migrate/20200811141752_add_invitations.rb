class AddInvitations < ActiveRecord::Migration[5.2]
  def change
    create_table :invitations do |t|
      t.string :invited_email, null: false
      t.integer :sender_id, null: false
      t.string :token, null: false
      t.timestamps
    end
  end
end

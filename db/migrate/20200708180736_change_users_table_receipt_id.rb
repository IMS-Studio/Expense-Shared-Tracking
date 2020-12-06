class ChangeUsersTableReceiptId < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :receipt_id, :integer
  end
end

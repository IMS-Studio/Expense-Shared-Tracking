class AddReceiptBillsRemoveUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :recipient_id, :integer
    remove_column :users, :receipt_id
  end
end

class RemoveReceiptIdBill < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :receipt_id
  end
end

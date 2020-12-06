class AddReceiptToBills < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :receipt_id, :integer
  end
end

class ChangeBillsCost < ActiveRecord::Migration[5.2]
  def change
    remove_column :bills, :cost
    add_column :bills, :cost, :decimal, precision: 7, scale: 2
  end
end

class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :bill_id, null: false
      t.integer :user_id
      t.timestamps
    end
  end
end

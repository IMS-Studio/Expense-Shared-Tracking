class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :author_id, null: false
      t.integer :history_id, null: false
      t.integer :group_id
      t.decimal :cost, null: false
      t.text :description, null: false


      t.timestamps
    end
  end
end

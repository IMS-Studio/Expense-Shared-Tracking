class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :bill_id, null: false
      t.text :text_body, null: false
      t.timestamps
    end
  end
end

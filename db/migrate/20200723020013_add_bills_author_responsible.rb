class AddBillsAuthorResponsible < ActiveRecord::Migration[5.2]
  def change
    add_column :bills, :author_payor, :boolean
  end
end

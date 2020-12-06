class ChangeBillsAuthorPayor < ActiveRecord::Migration[5.2]
  def change
    change_column_null :bills, :author_payor, false, true
  end
end

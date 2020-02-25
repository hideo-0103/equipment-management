class AddRepairsText < ActiveRecord::Migration[5.0]
  def change
    add_column :repairs, :text, :text,limit: 16777215
  end
end

class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.references :category

      t.timestamps
    end
    add_index :events, :category_id
  end
end

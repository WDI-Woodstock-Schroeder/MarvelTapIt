class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name
      t.text :description
      t.integer :marvel_id
      t.string :img_url

      t.timestamps null: false
    end
  end
end

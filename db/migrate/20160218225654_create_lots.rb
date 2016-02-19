class CreateLots < ActiveRecord::Migration
  def change
    create_table :lots do |t|
      t.string :number
      t.string :block
      t.string :stage
      t.belongs_to :user, index: true, foreign_key: true
      t.decimal :price
      t.decimal :square_meters
      t.decimal :front
      t.decimal :depth
      t.string :status

      t.timestamps null: false
    end
  end
end

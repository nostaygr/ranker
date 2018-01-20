class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.integer :rank
      t.string :name
      t.references :subject, foreign_key: true

      t.timestamps
    end
  end
end

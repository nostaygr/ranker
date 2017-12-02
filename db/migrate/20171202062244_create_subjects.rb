class CreateSubjects < ActiveRecord::Migration[5.1]
  def change
    create_table :subjects do |t|
      t.integer :user_id
      t.string :title

      t.timestamps
    end
  end
end

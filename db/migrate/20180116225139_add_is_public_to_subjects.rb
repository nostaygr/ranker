class AddIsPublicToSubjects < ActiveRecord::Migration[5.1]
  def change
    add_column :subjects, :is_public, :boolean
  end
end

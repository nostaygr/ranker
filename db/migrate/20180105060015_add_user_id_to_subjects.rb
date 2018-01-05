class AddUserIdToSubjects < ActiveRecord::Migration[5.1]
  def change
    add_reference :subjects, :user, index: true, foreign_key: true
  end
end

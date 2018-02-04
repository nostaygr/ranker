class Subject < ApplicationRecord
  belongs_to :user
  has_many :items, dependent: :destroy

  validates :title, length: { in: 1...50 }
  validates :is_public, inclusion: {in: [true, false]}
end

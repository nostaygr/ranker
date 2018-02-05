class Item < ApplicationRecord
  belongs_to :subject

  validates :name, length: { in: 1...50 }

  scope :next_rank, -> { (maximum(:rank) || 0) + 1 }
end

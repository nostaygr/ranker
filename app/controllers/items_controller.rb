class ItemsController < ApplicationController
  before_action :authenticate_v1_user!

  def show
  end

  def index
  end

  def create
    @item = Item.new(item_params)
    @item.save
  end

  def destroy
  end

  private

    def item_params
      params.permit(:name, :rank, :subject_id, :id)
    end
end

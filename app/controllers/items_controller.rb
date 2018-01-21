class ItemsController < ApplicationController
  before_action :authenticate_v1_user!

  def index
    render json: Subject.find(item_params[:subject_id]).items
  end

  def show
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

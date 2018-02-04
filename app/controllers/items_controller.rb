class ItemsController < ApplicationController
  before_action :authenticate_v1_user!
  before_action :current_items, only: [:index, :create]

  def index
    render json: @current_items
  end

  def show
  end

  def create
    @item = Item.new(item_params.merge({rank: @current_items.next_rank}))
    @item.save
    render json: @current_items
  end

  def destroy
  end

  private

    def item_params
      params.permit(:name, :rank, :subject_id, :id)
    end

    def current_items
      @current_items = Subject.find(item_params[:subject_id]).items
    end

end

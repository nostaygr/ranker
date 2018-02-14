class ItemsController < ApplicationController
  before_action :authenticate_v1_user!, only: [:editable_items, :publish_items, :create]

  def index
    if  (v1_user_signed_in? && current_v1_user.id == current_items_user.id) || current_subject.is_public
      render json: current_items and return
    end

    render nothing: true, status: 204
  end

  def editable_items
    if current_v1_user.id == current_items_user.id
      render json: current_items and return
    end

    render nothing: true, status: 204
  end

  def publish_items
    if current_v1_user.id == current_items_user.id
      current_subject.update(is_public: item_params[:is_public])
      render json: current_subject and return
    end

    render nothing: true, status: 204
  end

  def show
  end

  def create
    item = Item.new(item_params.merge({rank: current_items.next_rank}))
    render json: item and return if item.save
    render nothing: true, status: 400
  end

  def destroy
  end

  private

    def item_params
      params.permit(:name, :rank, :subject_id, :id, :is_public)
    end

    def current_subject
      Subject.find(item_params[:subject_id])
    end

    def current_items
      current_subject.items
    end

    def current_items_user
      current_subject.user
    end
end

class SubjectsController < ApplicationController
  before_action :authenticate_v1_user!, only: [:index, :create, :destroy]

  def index
    render json: current_v1_user.subjects 
  end

  def show
    subject = Subject.find(subject_params[:id])
    if (v1_user_signed_in? && current_v1_user.id == subject.user.id) || subject.is_public
      return render json: subject
    end
    render nothing: true, status: 204
  end

  def create
    subject = Subject.new(subject_params)
    subject.save
    render json: subject
  end

  def destroy
    Subject.find(subject_params[:id]).destroy
    render nothing: true, status: 204
  end

  private

    def subject_params
      params[:user_id] = current_v1_user.id if v1_user_signed_in?
      params.permit(:title, :is_public, :user_id, :id)
    end
end

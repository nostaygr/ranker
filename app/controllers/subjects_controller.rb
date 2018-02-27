class SubjectsController < ApplicationController
  before_action :authenticate_v1_user!, only: [:index, :create, :destroy]

  def index
    @subjects = current_v1_user.subjects
    render json: @subjects
  end

  def show
    @subject = Subject.find(subject_params[:id])
    render json: @subject
  end

  def create
    @subject = Subject.new(subject_params)
    @subject.save
    render json: @subject
  end

  def destroy
    @subject = Subject.find(subject_params[:id])
    @subject.destroy
  end

  private

    def subject_params
      params[:user_id] = current_v1_user.id if current_v1_user.present?
      params.permit(:title, :is_public, :user_id, :id)
    end
end

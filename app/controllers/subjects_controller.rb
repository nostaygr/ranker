class SubjectsController < ApplicationController
  before_action :authenticate_v1_user!

  def index
    @subjects = current_v1_user.subjects
    render json: @subjects
  end

  def show
  end

  def create
    @subject = Subject.new(subject_params)
    @subject.save
  end

  private

    def subject_params
      params[:user_id] = current_v1_user.id
      params.permit(:title, :user_id)
    end
end

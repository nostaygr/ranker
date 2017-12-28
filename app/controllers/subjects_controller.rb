class SubjectsController < ApplicationController
  before_action :authenticate_v1_user!

  def index
    @subjects = current_v1_user.subjects
    render json: @subjects
  end
end

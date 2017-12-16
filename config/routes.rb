Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :passwords => 'users/passwords',
    :registrations => 'users/registrations',
    :sessions => 'users/sessions',
  }
  get 'subjects/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

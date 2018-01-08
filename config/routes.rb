Rails.application.routes.draw do
  get 'subjects/index'
  post 'subjects', to: 'subjects#create'

  namespace :v1 do
    mount_devise_token_auth_for 'User',
                                at: 'auth',
                                controllers: { registrations: 'v1/auth/registrations',
                                               omniauth_callbacks: 'v1/auth/omniauth_callbacks'}
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

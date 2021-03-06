Rails.application.routes.draw do
  namespace :v1 do
    mount_devise_token_auth_for 'User',
                                at: 'auth',
                                controllers: { registrations: 'v1/auth/registrations',
                                               omniauth_callbacks: 'v1/auth/omniauth_callbacks' }
  end
  resources :users, shallow: true, only: [] do
    resources :subjects, shallow: true, only: [:index, :show, :create, :destroy] do
      resources :items, only: [:index, :show, :create, :destroy] do
        collection do
          get :editable_items
          put :publish_items
        end
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

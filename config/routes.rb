Rails.application.routes.draw do
  resources :shops
  resources :plants
  post '/login', to: 'authentication#login'
  get '/verify', to: 'authentication#verify'
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

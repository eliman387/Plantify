Rails.application.routes.draw do
  resources :shops
  resources :plants
  resources :users
  post '/login', to: 'authentication#login'
  get '/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

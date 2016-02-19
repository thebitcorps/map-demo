Rails.application.routes.draw do
  resources :lots
  devise_for :users
  resources :users,except: [:new,:edit]
  get 'pages/home'
  root 'pages#home'
end

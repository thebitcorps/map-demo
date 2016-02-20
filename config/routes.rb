Rails.application.routes.draw do
  resources :lots
  devise_for :users
  resources :users,except: [:new,:edit]
  get 'pages/home'
  get 'pages/lots', to: 'pages#lots'
  root 'pages#home'
end

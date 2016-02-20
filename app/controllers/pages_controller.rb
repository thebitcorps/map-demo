class PagesController < ApplicationController
  def home
  end

   def lots
    respond_to do |format|
      format.json { render json: Lot.all, except: [:user_id, :block, :price, :square_meters, :front, :depth, :created_at, :updated_at]}
    end
  end
end

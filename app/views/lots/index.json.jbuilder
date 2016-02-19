json.array!(@lots) do |lot|
  json.extract! lot, :id, :number, :block, :stage, :user_id, :price, :square_meters, :front, :depth, :status
  json.url lot_url(lot, format: :json)
end

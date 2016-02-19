json.extract! @lot, :id, :number, :block, :stage, :price, :square_meters, :front, :depth, :status
if current_user
  json.salesman @lot.user.email
end

stages_numbers = [40, 30, 20, 55, 37, 35, 19, 60, 6, 22, 38, 39, 38, 36, 38];

15.times do |i|
	stages_numbers[i].times do |j|
		Lot.create(number: j + 1, stage: i + 1, block: i + 1, square_meters: 10, status: "available")
	end
end


class Machine

	def initialize(name, price)
		@name = name
		@price = price
	end

	def describe
		puts "This is a #{self}"
	end

	def to_s
		"#{@name}, costs #{@price} €"
	end
end

class Tv < Machine

	attr_accessor :volume 

	def initialize(price, type)
		super("television", price)
		@type = type
		@volume = 0
	end

	def to_s
		"#{super.to_s}, type #{@type}, current volume #{@volume}"
	end
end


# Use of classes

puts "\n-- create instances --"

m = Machine.new("simple machine", 10)
m.describe

tv = Tv.new(1000, "LED")
tv.volume = 50
tv.describe

puts "\n-- check types --"

puts "tv is a Tv ? #{tv.is_a? Tv}"
puts "tv is a Machine ? #{tv.is_a? Machine}" 
puts "m is a Tv ? #{m.is_a? Tv}"
puts "m is a Machine ? #{m.is_a? Machine}"
 
puts ""

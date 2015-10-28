"use strict"

// Javascript "inheritance" using new "class" keyword

// Pros: code is clean and native (no need for auxiliary functions)
// Cons: not available in all browsers yet


class Machine {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	describe() {
		console.log("This is a " + this);
	}

	toString() {
		return this.name + ", costs " + this.price + " €";
	}
}


class Tv extends Machine {

	constructor(price, type) {
		super("television", price); // call to super constructor
		this.type = type;
		this.volume = 0;
	}

	setVolume(volume) {
		this.volume = volume;
	}

	toString() {
		return super.toString() // call to super method
			+ ", type " + this.type
			+ ", current volume " + this.volume; 
	}
}



// Export module
module.exports = {
	Machine: Machine,
	Tv: Tv
};

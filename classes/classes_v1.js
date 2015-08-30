
// Javascript "inheritance" using the prototype chain

// Pros: doesn't need any auxiliar method
// Cons: code is not very clear


// Machine "class"

// "Class" + Constructor
var Machine = function(name, price) {
	this.name = name;
	this.price = price;
};

// Prints machine info
Machine.prototype.describe = function() {
	console.log("This is a " + this);
};

// Returns machine info
Machine.prototype.toString = function() {
	return this.name + ", costs " + this.price + " €";
};


// Tv "class"

// "Class" + Constructor
var Tv = function(price, type) {
	Machine.call(this, "television", price); // call to super constructor
	this.type = type;
	this.volume = 0;
};

// Tv "extends" Machine
Tv.prototype = new Machine();  // Sets "inheritance" (actually, prototype chain)
Tv.prototype.constructor = Tv; // Fixes the "constructor" property

// Changes volume of Tv
Tv.prototype.setVolume = function (volume) {
	this.volume = volume;
};

// Returns Tv info (overrides the parent method)
Tv.prototype.toString = function () {
	return Machine.prototype.toString.call(this) // call to super method
		+ ", type " + this.type
		+ ", current volume " + this.volume;
};



module.exports = {
	Machine: Machine,
	Tv: Tv
};


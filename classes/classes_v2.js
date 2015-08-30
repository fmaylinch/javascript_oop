
// Javascript "inheritance" with an auxiliary method (it's the same as v1 but refactored)

// Pros: code is a bit more clean
// Cons: code still not very clear


// Configures "inheritance" between two "classes"
function extend(Parent, Child) {
	Child.prototype = new Parent();      // Sets "inheritance" (actually, prototype chain) 
	Child.prototype.constructor = Child; // Fixes the "constructor" property
	Child.super = Parent.prototype;      // Lets you use Child.super.constructor and Child.super.method
}



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
	Tv.super.constructor.call(this, "television", price); // call to super constructor
	this.type = type;
	this.volume = 0;
};

// Tv "extends" Machine
extend(Machine, Tv)

// Changes volume of Tv
Tv.prototype.setVolume = function (volume) {
	this.volume = volume;
};

// Returns Tv info (overrides the parent method)
Tv.prototype.toString = function () {
	return Tv.super.toString.call(this) // call to super method
		+ ", type " + this.type
		+ ", current volume " + this.volume; 
};



// Export module
module.exports = {
	Machine: Machine,
	Tv: Tv
};

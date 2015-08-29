
// Javascript inheritance with an auxiliary method (it's the same as v1 but refactored)


// Configures "inheritance" between two "classes"
function extend(Parent, Child) {
	Child.prototype = new Parent();       // Sets "inheritance" chain (actually, sets prototype chain) 
	Child.prototype.constructor = Child;  // Fixes the "constructor" property
	Child.parent = Parent.prototype;      // Lets you use Child.parent.constructor and Child.parent.method
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
	Tv.parent.constructor.call(this, "television", price); // call to super constructor
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
	return Tv.parent.toString.call(this) // call to super method
		+ ", type " + this.type
		+ ", current volume " + this.volume; 
};


// Export module
module.exports = {
	Machine: Machine,
	Tv: Tv
};

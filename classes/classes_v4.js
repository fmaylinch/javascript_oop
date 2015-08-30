
// Javascript "inheritance" with an auxiliary method (gets ideas from v2 and v3)

// Pros: code for each class is grouped and clean
// Cons: you can't add a property/method called "super" or "constructor" (they're reserved)


/*
  Creates a "class".
  The `config` is an object with the properties and methods to be added to the prototype.
  Optionally, it may have two special keys: the "constructor" function and the "super" class.
*/
function Class(config)
{
	var TheClass = config.constructor || function(){}; // Given constructor or an empty one
	var ParentClass = config.super || Object;          // Given super class or Object by default

	TheClass.prototype = new ParentClass();    // Sets "inheritance" (actually, prototype chain) 
	TheClass.prototype.constructor = TheClass; // Fixes the "constructor" property
	TheClass.super = ParentClass.prototype;    // Lets you use YourClass.super.constructor and YourClass.super.method

	// Add specified methods (ignore especial keys)
	for (var name in config) {
		if (name !== "constructor" && name !== "super") {
			TheClass.prototype[name] = config[name];
		}
	}

	return TheClass;
}



var Machine = Class({

	constructor: function(name, price) {
		this.name = name;
		this.price = price;
	},

	describe: function() {
		console.log("This is a " + this);
	},

	toString: function() {
		return this.name + ", costs " + this.price + " €";
	}
});


var Tv = Class({

	super: Machine,

	constructor: function(price, type) {
		Tv.super.constructor.call(this, "television", price); // call to super constructor
		this.type = type;
		this.volume = 0;
	},

	setVolume: function (volume) {
		this.volume = volume;
	},

	toString: function () {
		return Tv.super.toString.call(this) // call to super method
			+ ", type " + this.type
			+ ", current volume " + this.volume; 
	}
});



// Export module
module.exports = {
	Machine: Machine,
	Tv: Tv
};

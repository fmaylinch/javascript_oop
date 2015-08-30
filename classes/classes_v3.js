
// Javascript "inheritance" with (modified) code from:
//    http://js-bits.blogspot.com.es/2010/08/javascript-inheritance-done-right.html

// Pros: code for each class is grouped; you don't have to repeat the class name
// Cons: class code is a bit weird


function extend(base, sub, methods)
{
	sub.prototype = new base();
	sub.prototype.constructor = sub;
	sub.base = base.prototype;

	// Copy the methods passed in to the prototype
	for (var name in methods) {
		sub.prototype[name] = methods[name];
	}
	// so we can define the constructor inline
	return sub;
}


// Machine "class"

var Machine = (function() {

	// "Class" + Constructor
	var $this = function (name, price) {
		this.name = name;
		this.price = price;
	};

	// Machine "extends" Object (base class)
	extend(Object, $this, {

		describe: function() {
			console.log("This is a " + this);
		},

		toString: function() {
			return this.name + ", costs " + this.price + " €";
		}
	});

	return $this;
})();


// Tv "class"

var Tv = (function() {

	// "Class" + Constructor
	var $this = function (price, type) {
		$this.base.constructor.call(this, "television", price); // call to super constructor
		this.type = type;
		this.volume = 0;
	};

	// Machine "extends" Tv
	extend(Machine, $this, {

		setVolume: function (volume) {
			this.volume = volume;
		},

		toString: function () {
			return $this.base.toString.call(this) // call to super method
				+ ", type " + this.type
				+ ", current volume " + this.volume;
		}

	});

	return $this;
})();



// Export module
module.exports = {
	Machine: Machine,
	Tv: Tv
};

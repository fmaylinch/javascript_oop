
// Choose one version
var classes = require("./classes/classes_v1.js");
//var classes = require("./classes/classes_v2.js");
//var classes = require("./classes/classes_v3.js");
//var classes = require("./classes/classes_v4.js");
//var classes = require("./classes/classes_v5.js");


// Extract objects from export module
var Machine = classes.Machine;
var Tv = classes.Tv;


console.log("\n-- create instances --");

var mc = new Machine("simple machine", 10);
mc.describe();

var tv = new Tv(1000, "LED");
tv.setVolume(50);
tv.describe();


console.log("\n-- check types --");

function logIsOrNot(variable, clazz, varName, className) {
	var is = (variable instanceof clazz); // check type of an instance
	console.log(varName + (is ? " IS" : " is NOT") + " a " + className);
}

logIsOrNot(tv, Machine, "tv", "Machine");
logIsOrNot(tv, Tv, "tv", "Tv");
logIsOrNot(mc, Machine, "mc", "Machine");
logIsOrNot(mc, Tv, "mc", "Tv");

console.log("");

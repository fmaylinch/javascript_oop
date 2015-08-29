
// Choose one version
var classes = require("./oop_v1.js");
//var classes = require("./oop_v2.js");
//var classes = require("./oop_v3.js");


// Extract objects from export module
var Machine = classes.Machine;
var Tv = classes.Tv;


console.log("\n-- create instances --");

var m = new Machine("simple machine", 10);
m.describe();

var tv = new Tv(1000, "LED");
tv.setVolume(50);
tv.describe();

console.log("\n-- check types --");

// You can check the type of an instance
console.log("tv is a Tv ? ", tv instanceof Tv);
console.log("tv is a Machine ? ", tv instanceof Machine);
console.log("m is a Tv ? ", m instanceof Tv);
console.log("m is a Machine ? ", m instanceof Machine);

console.log("");

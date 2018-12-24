var counter = function(arr) { return 'There are ' + arr.length + ' elements in this array';
};


var adder = function(a,b) { 
    return `The sume of the 2 numbers is ${a+b}`;

};

var pi = 3.142; 

console.log(counter(['shaun', 'crystal', 'ryu']));
console.log(adder(4,2));
module.exports.counter = counter; 
module.exports.adder = adder;
module.exports.pi = pi; 
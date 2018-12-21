
var stuff = require('./stuff')

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));
// var time = 0; 



// var timer = setInterval(function(){
//     time += 2; 
//     console.log(time + ' 3 second have passed');
//     if (time > 5) { 
//         clearInterval(time); 
//         }
// }, 2000);
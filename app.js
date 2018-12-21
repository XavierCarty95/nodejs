console.log(__dirname);
console.log(__filename);

var counter = require('./modulesnode')

console.log(counter(['shaun', 'crystal', 'ryu']));
// var time = 0; 



// var timer = setInterval(function(){
//     time += 2; 
//     console.log(time + ' 3 second have passed');
//     if (time > 5) { 
//         clearInterval(time); 
//         }
// }, 2000);
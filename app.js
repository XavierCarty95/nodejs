var fs = require('fs');

fs.unlink('./stuff/writeMe.txt', function() {
   fs.rmdir('stuff');
});


//fs.mkdir('stuff' , function() {
//     fs.readFile('readMe.txt', 'utf8' , function(data){
//         fs.writeFile("./stuff/writeMe.txt",data);
//     });
// });

//fs.rmdirSync('stuff');

//fs.unlink('writeMe.txt');
var http = require("http");
var fs = require('fs');
 
 var server = http.createServer(function(req, res){
     
    console.log('request was made: ' + req.url);
    if (req.url === '/home || req.url === '/''){
        res.writeHead(200,{'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + 'index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + 'contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(ninjas));
        
    } else { 
        res.writeHead(404, {'Content0-Type': '404/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
 });
    
   
   
 // var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
    // myReadStream.pipe(res);  
    // res.end('Hey ninjas');
 server.listen(3000, '127.0.0.1');
 console.log("yo dawgs now listening to port 3000");
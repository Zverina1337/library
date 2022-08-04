let http = require('http');
let i = 100;

http.createServer(function(req, res){
    res.writeHead(200,"Content-Type","text/plain");
    res.statusCode = 200;
    console.log(req.url);
	console.log(req.method);
	console.log(req.headers.host);
    if(i != 0){
       res.write(`${--i}`); 
    }else{
        res.write("i = 0");
    }
    
    res.end();
}).listen(3000);
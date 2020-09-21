var http=require('http');
var dt=require('./Mydate.js');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("The date and time are currently:" + dt.myDateTime());
    res.end;    
}).listen(8080);
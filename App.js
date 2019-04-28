var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-type':'video/mp4'});
var rs= fs.createReadStream("webRTC.mp4");
rs.pipe(res);
}).listen(3000);
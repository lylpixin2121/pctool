var http = require('http');
	process.setMaxListeners(50);
var os = require('os');
var _host = os.networkInterfaces().en0
		? os.networkInterfaces().en0[1].address
		: os.networkInterfaces()['\u672C\u5730\u8FDE\u63A5'][1].address;
var server = http.createServer(function(req,res){
	req.setMaxListeners(50);
	res.setMaxListeners(50);
	res.writeHead(200,{
		'Access-Control-Allow-Origin':'*',
		'Content-Type':'text/event-stream',
		"Cache-Control":"no-cache",
		"Connection":"keep-alive"
	});
	process.on('message',function(data){
		res.write("data: " + (new Date()) + "\n\n");
	});
}).listen(8003);

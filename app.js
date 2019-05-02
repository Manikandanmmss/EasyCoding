var http = require('http');
var uc = require('upper-case');
var url = require('url');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(req.url+"\n");
    res.write(uc("Hello world this is my first nodejs examples"));
	res.write('/n');
    var q = url.parse(req.url ,true).query;
	var text = q.year +"_"+q.month;
    res.end(text);
}).listen(8080);
console.log('Server running at http://localhost:8080/'); 

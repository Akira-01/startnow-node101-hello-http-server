// write your code here
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'} );
    res.end('Hello World')

}).listen(8080);
console.log('Server is now running on localhost:8080...')
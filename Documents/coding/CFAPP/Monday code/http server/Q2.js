var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  if ((request.method == 'GET') &&
    (request.url == '/index.html') || (request.url == '/')) {
    response.writeHead(200);
    fs.createReadStream('C:/Users/Kate/Documents/coding/CFAPP/index.html')
	.pipe(response);
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(9999, function callback(error, data) {
  if (error) {throw error;}
	});

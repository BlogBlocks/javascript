var static = require('node-static');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
var file = new static.Server('./instructions');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        // 
        // Serve files! 
        // 
        file.serve(request, response);
    }).resume();
}).listen(8000);

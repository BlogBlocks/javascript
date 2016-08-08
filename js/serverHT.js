var util = require('util'),
connect = require('connect'),
    static = require('serve-static'),
    port = 3000;

connect.createServer(express.static(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');
var express = require('express');
var fileSystem =require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var htmlbuffer = fileSystem.readFile("index.html");
  response.send(htmlbuffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

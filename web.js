var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//fs.readFileSync
//Buffer.toString

var data = fs.readFileSync('index.html');
var data_string=data.toString();
response.send(data_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

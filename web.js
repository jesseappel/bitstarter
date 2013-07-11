var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var hello_world=buf.toString(fs.readFileSync('index.html'));


  response.send(hello_world);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

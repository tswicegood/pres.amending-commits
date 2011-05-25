var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Helo World!</h1>");
  response.end();
}).listen(1234, function() {
  console.log("Listening on port 1234");
});

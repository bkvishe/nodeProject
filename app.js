var http = require("http");
var port = 9000;

http.createServer(function(req, resp){

    console.log("Server is listening to port 9000 !");
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write("<html><b>Ok</b></html>");
    resp.end();

}).listen(port);
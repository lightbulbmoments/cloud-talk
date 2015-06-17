var http = require("http")
var express = require("express")
var app = express();
var port = process.env.PORT || 8080
var server = http.createServer(app);


app.use(express.static(__dirname + "/"));

app.route("/").get(function(req, res){
	res.render("index");
});

server.listen(port);
console.log("http server listening on %d", port);
var http = require("http")
var express = require("express")
var app = express();
var port = process.env.PORT || 8080
var server = http.createServer(app);

var main_controller = require('./server/main_controller.js');

new main_controller(server);

app.use(express.static(__dirname + "/"));
app.route('/signup')
	.get(function(req, res){
		res.send("Response from signup")
	});

app.route("/").get(function(req, res){
	res.render("index");
});

server.listen(port);
console.log("http server listening on %d", port);
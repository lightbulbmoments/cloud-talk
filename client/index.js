var http = require("http")
var express = require("express")
var body_parser = require('body-parser');
var app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
var port = process.env.PORT || 8080
var server = http.createServer(app);
	
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


var main_controller = require('../server/main_controller.js');
var router = require('../server/router.js');

new main_controller(server);
new router(app, express);

server.listen(port);
console.log("http server listening on %d", port);
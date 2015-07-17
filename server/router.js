function router(app, express){
var path = require("path")

	app.use("/static", express.static(path.resolve(__dirname+"/../client/static")));

	app.route("/").get(function(req, res){
		console.log(__dirname);
		res.sendFile(path.resolve(__dirname + "/../client/static/html/index.html"));
	});

	app.route("/register").get(function(req, res){
		res.sendFile(__dirname + "/static/html/register.html");
	});

	app.route("/create-user").post(function(req, res){
		console.log(req.body);
		console.log(req.get('Content-Type'));
		res.send("welcome!!");
	});

}

module.exports = router;
var DBHelper = function(){
	var _self = this;
	var mongoose=require("mongoose");
	mongoose.connect('mongodb://localhost:27017/mongoosed');
	var Models = require("./models/models.js")(mongoose);
	
}

module.exports = new DBHelper();
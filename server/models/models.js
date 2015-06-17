var Models = function(mongoose){
	_self = this;
	_self.Schema = mongoose.Schema;
	_self.userSchema = new _self.Schema({
		email_id: String,
		name: String,
		password: String,
		date_created: Date,
		date_updated: Date,
		socket_id: String
	});

	return _self;
}

module.exports = Models;
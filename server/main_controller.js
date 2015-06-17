function MainController(server){

	var io = require('socket.io')(server);
	var socket_controller = require('./socket_controller.js')(io);
	// var db_helper = require('./db_helper.js');
}

module.exports = MainController;
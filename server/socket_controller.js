function SocketController(socket){
	console.log("We're in SocketController");
	
	socket.on('connection', function(_socket){
		console.log("connection opened");
		
		_socket.on('register', function(data){

		});

		_socket.emit('welcome', {msg:_socket.id});

		_socket.on('msg', function(data){
			console.log(data);
			socket.to(data.id).emit("msg", {"msg":data.msg});
		})
	});

}

module.exports = SocketController;
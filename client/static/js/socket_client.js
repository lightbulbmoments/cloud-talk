(function(){

	var accessModifier = {
        "public": {
            enumerable: false,
            writable: true,
            configurable: false
        },
        "protected": {
            enumerable: true,
            writable: false,
            configurable: false
        },
        "private": {
            enumerable: false,
            writable: false,
            configurable: false
        }
    };

    window.socket=io.connect(window.location.hostname, {reconnection:true});
	
		window.socket.on("connect", function(){
  			console.log("connection established with the server");
		});

		window.socket.on("welcome", function(data){
			console.log(data);
		});

		window.socket.on("msg", function(data){
			console.log(data);
		});

		window.socket.on("disconnect", function(socket){
			console.log(socket);
			console.log("Socket disconnected.");
		});
		
	_self = SocketHandler = {
		sendMessage : function(receiver_id, msg){
			window.socket.emit("msg", {id:receiver_id, msg:msg})
		}
	};

	/**
     * Publicly accessible object.
     **/
	window['SocketHandler'] = SocketHandler;

	 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
	Object.defineProperties(SocketHandler, {
		"sendMessage": accessModifier.public
    });

	// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    Object.defineProperty(window, 'SocketHandler', accessModifier.private);
}());
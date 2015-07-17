 $(document)
    .ready(function() {
    	$form = $('.ui.form'), 
		$( ".ui.form > .submit" ).click(function(event) {
			var $form = $('.ui.form');
			registraion_details = $form.form('get values');
			if(registraion_details.name == "Tarun"){
				console.log("prevented default");
				return;
			}
		});
    });
function autentificacionJSON(usuario, password) {
	
	var xhr = Ti.Network.createHTTPClient();
	
	xhr.open("POST", "http://www.dimsatec.com/services/mexq/index.php/api/v1/login");
	
	xhr.onload = function() {
		
		try {
			
			json = JSON.parse(this.responseText);
			Ti.App.fireEvent('login', {
				datos : JSON.parse(this.responseText)
			});
			
		} catch(E) {
			Ti.API.info(E);

		}

	};
	
	xhr.send({
			usuario : usuario,
			password : password
	});

}
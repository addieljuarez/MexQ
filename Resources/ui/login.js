Ti.include('../funciones/json.js');
var loginWindow = Ti.UI.currentWindow;

var username = Ti.UI.createTextField({
	hintText:'Nombre de Usuario',
	width : 300,
	height : 70,
	left : 600,
	top : 200,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});

var password = Ti.UI.createTextField({
	hintText:'Contraseña',
	width : 300,
	height : 70,
	left : 600,
	top : 290,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    passwordMask:true
});

var sendButton = Ti.UI.createButton({
	title:'Entrar',
	width : 200,
	height : 60,
	left : 600,
	top : 380
});

sendButton.addEventListener('click', function(e){
	if(username.value != '' && password.value != '') {
			autentificacionJSON(username.value,password.value);
		}
		else{
			alert('Correo y Contraseña son necesarios');
		}
	
	
	});
	

	Ti.App.addEventListener('login', function(e) {
		if(e.datos==username.value){
		var loginW = Ti.UI.createWindow({
		url:'../ui/mainApp.js',
		navBarHidden:true,
		exitOnClose:true,
		fullscreen:true,
		backgroundColor:'#fff',
		backgroundImage: '../imagenes/Fondo-1.jpg',
		});
	
		loginW.open();
		loginWindow.close();
		
		}else{
			alert('Usuario o contraseña invalidas');
		}
		});
		
loginWindow.add(username);
loginWindow.add(password);
loginWindow.add(sendButton);

//usuario:nao
//password:password
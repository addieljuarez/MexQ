
Ti.UI.setBackgroundColor('#fff');

var loginWindow = Ti.UI.createWindow({
	backgroundColor:'#fff',
	url:'/ui/login.js',
	navBarHidden:true,
	exitOnClose:true,
	fullscreen:true,
	backgroundImage: '../imagenes/Fondo-1.jpg',
	orientationModes:[Titanium.UI.LANDSCAPE_LEFT]
});

loginWindow.open();

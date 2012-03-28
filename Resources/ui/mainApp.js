main = Ti.UI.currentWindow;

var ordenServicioLabel = Ti.UI.createLabel({
	text:'Orden de Servicio',
	width : 400,
	height : 100,
	left : 320,
	top : 200,
	font : {
		fontSize : '30dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});

ordenServicioLabel.addEventListener('click', function(e){
	var ordenservicio = Ti.UI.createWindow({
		url:'../ui/ordenServicio.js',
		backgroundColor:'#fff',
		navBarHidden:true,
		orientationModes:[Titanium.UI.LANDSCAPE_LEFT]
	});
	ordenservicio.open({modal:true});
	
});

var reporteInspeccionLabel = Ti.UI.createLabel({
	text:'Reporte de Inspeccion',
	width : 600,
	height : 100,
	left : 400,
	top : 320,
	font : {
		fontSize : '30dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
reporteInspeccionLabel.addEventListener('click', function(e){
	var reporteInspeccion = Ti.UI.createWindow({
		url:'../ui/reporteInspeccion.js',
		backgroundColor:'#fff',
		navBarHidden:true,
		orientationModes:[Titanium.UI.LANDSCAPE_LEFT]
	});
	reporteInspeccion.open({modal:true});
});

main.add(ordenServicioLabel);
main.add(reporteInspeccionLabel);

Ti.include('../funciones/spinners.js');
Ti.include('../funciones/camara.js');

var servicio = Ti.UI.currentWindow;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var flujo1 = Ti.UI.createScrollView ({top:20, left:20, width:1024,
	height:600, backgroundColor:'#fff'});  

//
//titulo de la ventana
//
var titulo = Titanium.UI.createLabel({
	text:'Orden de servicio',
	top:10,
	left : 50,
	font:{fontSize:'24dp'},
});


flujo1.add(titulo);

//
// este textField lleva Spinner
//
var ordenDeServicio = Ti.UI.createTextField({
    top : 80,
    left : 50,
    hintText : "Orden de Servicio",
    width : 280,
    height : '40dp',
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
	editable:false,    
});
var data1 =['','Servicio Nuevo','Parte Nueva','Defecto Nuevo']
ordenDeServicio.addEventListener('singletap', function(e){
	pickerGeneral(data1,ordenDeServicio);
});

flujo1.add(ordenDeServicio);

//
// este textField lleva Spinner
//
var reclamoPlanta = Ti.UI.createTextField({
    top : 80,
    left : 360,
    hintText : "Reclamo de Planta",
    width : 280,
    height : '40dp',
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    editable:false,
});

var data2 =['','Cobrable','NO Cobrableo']
reclamoPlanta.addEventListener('singletap', function(e){
	pickerGeneral(data2,reclamoPlanta);
});
flujo1.add(reclamoPlanta);

//
// este textField lleva Spinner
//
var posiblesCambios = Ti.UI.createTextField({
    top : 80,
    left : 670,
    hintText : "posibles cambios",
    width : 280,
    height : '40dp',
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    editable:false,
});

var data3 =['','Tiempo Estandar','inventario', 'Tipo de Selección', 'Método', 'Cargo a Clientes', 'Otros']
posiblesCambios.addEventListener('singletap', function(e){
	pickerGeneral(data3,posiblesCambios);
});
flujo1.add(posiblesCambios);


//
// segunda linea, primer text field
//
var nombreDeCompaniaCliente = Ti.UI.createTextField({
	top : 150,
	left : 50,
	hintText : "Nombre de Compañia Cliente",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
   // keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(nombreDeCompaniaCliente);



//
// segunda linea, segundo text field
//
var ciudad = Ti.UI.createTextField({
	top : 150,
	left : 525,
	hintText : "Ciudad",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
   // keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(ciudad);





//
//titulo de la ventana
//
var titulo2 = Titanium.UI.createLabel({
	text:'Contacto',
	top:220,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo1.add(titulo2);





//
// tercer linea, segundo text field
//
var contactoCliente = Ti.UI.createTextField({
	top : 290,
	left : 50,
	hintText : "Nombre de contacto cliente",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
   // keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(contactoCliente);

//
//tercer linea, segundo text field
//
var celularCliente = Ti.UI.createTextField({
	top: 290,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "celular contacto cliente",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
  //  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(celularCliente);






//
//cuarta linea, primer text field
//
var telefono = Ti.UI.createTextField({
	top: 360,
	left : 50,
	width : 425,
	height : '40dp',
	hintText : "Telefono",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
  //  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(telefono);



//
// cuarta linea , segundo text field
//
var correoElectronico = Ti.UI.createTextField({
	top : 360,
	left : 525,
	hintText : "Correo Electronico",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType:Titanium.UI.KEYBOARD_EMAIL,
    //DEFAULT,
    //ASCII
    //URL
    //NUMBER_PAD
    //NUMBERS_PUNCTUATION
    //PHONE_PAD
    //returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(correoElectronico);





//
//titulo de la ventana
//
var titulo3 = Titanium.UI.createLabel({
	text:'Pago',
	top:430,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo1.add(titulo3);





//
// quinta linea, segundo text field
//
var responsablePago = Ti.UI.createTextField({
	top : 500,
	left : 50,
	hintText : "Contacto Responsable de Pago",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
   // keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(responsablePago);

//
//quinta linea, segundo text field
//
var celularPago = Ti.UI.createTextField({
	top: 500,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Celular Responsable Pago",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType : Titanium.UI.KEYBOARD_NUMBER_PAD,
  //  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(celularPago);





//
// sxta linea, segundo text field
//
var telefonoPago = Ti.UI.createTextField({
	top : 570,
	left : 50,
	hintText : "Telefono",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType:Titanium.UI.KEYBOARD_PHONE_PAD,
   // returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(telefonoPago);

//
//sexta linea, segundo text field
//
var correoPago = Ti.UI.createTextField({
	top: 570,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Correo Electronico",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	passwordMask:false,
    keyboardType : Titanium.UI.KEYBOARD_EMAIL,
  //  returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
   // borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED   
});
flujo1.add(correoPago);




//
//titulo de la ventana
//
var titulo4 = Titanium.UI.createLabel({
	text:'¿A que departamento es el cargo?',
	top:640,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo1.add(titulo4);





//
// septima linea, primer text field
//
var deptoCargo= Ti.UI.createTextField({
	top : 710,
	left : 50,
	hintText : "Selecciona Departamento",
	width : 425,
	height : '40dp',
	editable:false,
});
var data4 =['','Producción','Proveedor', 'TLogistica', 'Otro']
deptoCargo.addEventListener('singletap', function(e){
	pickerGeneral(data4,deptoCargo);
});
flujo1.add(deptoCargo);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var planta = Ti.UI.createView({
	width:1024,
	height:600,
	top:0,
	left:0,
	backgroundColor:'#fff'
});

var textoPlanta = Ti.UI.createLabel({
	text:'Compañia',
	width : 900,
	height : 60,
	left : 100,
	top : 40,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
planta.add(textoPlanta);
var nombrePlanta = Ti.UI.createTextField({
	hintText:'Nombre de la planta',
	height:60,
	width:400,
	top:105,
	left:100
});
planta.add(nombrePlanta);

var ciudadPlanta = Ti.UI.createTextField({
	hintText:'Ciudad de la planta',
	height:60,
	width:400,
	top:105,
	left:540,
	editable:false
});

var data =['','uno','dos']
ciudadPlanta.addEventListener('singletap', function(e){
	pickerGeneral(data,ciudadPlanta);
});
planta.add(ciudadPlanta);

var contacto = Ti.UI.createLabel({
	text:'Contacto',
	width : 500,
	height : 60,
	left : 100,
	top : 175,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
planta.add(contacto);
var contactoPlanta = Ti.UI.createTextField({
	hintText:'Nombre del contacto',
	height:60,
	width:400,
	top:240,
	left:100
});
planta.add(contactoPlanta);

var celularPlanta = Ti.UI.createTextField({
	hintText:'Celular',
	height:60,
	width:400,
	top:240,
	left:540,
});
planta.add(celularPlanta);

var emailContacto =Ti.UI.createTextField({
	hintText:'Email',
	height:60,
	width:400,
	top:305,
	left:100
});
planta.add(emailContacto);

var telefonoContacto =Ti.UI.createTextField({
	hintText:'Telefono',
	height:60,
	width:400,
	top:305,
	left:540
	
});
planta.add(telefonoContacto);

var requitosL= Ti.UI.createLabel({
	text:'Detalles',
	height:60,
	width:400,
	top:375,
	left:100,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
planta.add(requitosL);

var requisitosT = Ti.UI.createTextField({
	hintText:'Requisitos de Entrada a la Compañia',
	height:60,
	width:850,
	top:440,
	left:100,
});
planta.add(requisitosT);


var pknT = Ti.UI.createTextField({
	hintText:'Requiere PKN de inicio u otra informacion',
	height:60,
	width:850,
	top:505,
	left:100,
});
planta.add(pknT);


////////////
var piezasV = Ti.UI.createView({
	width:1024,
	height:600,
	top:0,
	left:0,
	backgroundColor:'#fff'
});

var piezasDatos = Ti.UI.createLabel({
	text:'Datos Especificos del Servicio',
	width : 900,
	height : 60,
	left : 100,
	top : 40,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
piezasV.add(piezasDatos);

fechaInicio= Ti.UI.createTextField({
	hintText:'Fecha de Inicio',
	height:60,
	width:400,
	top:105,
	left:100,
	editable:false
});
piezasV.add(fechaInicio);

fechaInicio.addEventListener('singletap',function(e){
	pickerFecha(fechaInicio);
});

var cantidadPersonal = Ti.UI.createTextField({
	hintText:'Cantidad de Personal',
	height:60,
	width:300,
	top:105,
	left:540,
});
piezasV.add(cantidadPersonal);

var piezasDatos = Ti.UI.createLabel({
	text:'Piezas',
	width : 900,
	height : 60,
	top : 180,
	left : 100,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
piezasV.add(piezasDatos);

var imgView = Ti.UI.createImageView({
	height : 150,
	width : 150,
	top : 245,
	left : 100,
	borderColor : '#9fa4a7',
	
});
piezasV.add(imgView);

var dialog = Titanium.UI.createOptionDialog({
	title : 'Seleccione fotografia..',
	options : ['Camara', 'Galeria', 'Cancelar'],
	cancel : 2
});

dialog.addEventListener('click', function(e) {

	if(e.index == 1) {

		Titanium.Media.openPhotoGallery({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					imgView.image = image;
				}
			},
			cancel : function() {
			}
		});
	} else if(e.index == 0) {
		Titanium.Media.showCamera({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					imgView.image = image;
				}
			},
			cancel : function() {
			},
			error : function(error) {
				var a = Titanium.UI.createAlertDialog({
					title : 'Camera'
				});
				if(error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Device does not have image recording capabilities');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			},
			allowImageEditing : true,
			saveToPhotoGallery : false
		});
	}

});

imgView.addEventListener('click', function(e){
});

var nombrePieza = Ti.UI.createTextField({
	hintText:'Nombre ',
	height:60,
	width:400,
	top:245,
	left:260
});
piezasV.add(nombrePieza);

var NumeroPiezas =Ti.UI.createTextField({
	hintText:'Numero',
	height:60,
	width:150,
	top:245,
	left:665
	
});
piezasV.add(NumeroPiezas);

NumeroPiezas.addEventListener('click', function(e){
	dialog.show();
});

var defectoPieza = Ti.UI.createTextField({
	hintText:'Defecto ',
	height:60,
	width:600,
	top:305,
	left:260
});
piezasV.add(defectoPieza);

var imgView2 = Ti.UI.createImageView({
	height : 150,
	width : 150,
	top : 400,
	left : 100,
	borderColor : '#9fa4a7',
	
});
piezasV.add(imgView2);

var nombrePieza2 = Ti.UI.createTextField({
	hintText:'Nombre ',
	height:60,
	width:400,
	top:400,
	left:260
});
piezasV.add(nombrePieza2);

var NumeroPiezas2 =Ti.UI.createTextField({
	hintText:'Numero',
	height:60,
	width:150,
	top:400,
	left:665
	
});
piezasV.add(NumeroPiezas2);

var defectoPieza2 = Ti.UI.createTextField({
	hintText:'Defecto ',
	height:60,
	width:600,
	top:465,
	left:260
});
piezasV.add(defectoPieza2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var flujo2 = Ti.UI.createScrollView({width:1024,height:600, top:100, left:100, backgroundColor:'#fff'});  


//
//titulo de la seccion
//
var titulo5 = Titanium.UI.createLabel({
	text:'Datos Específicos',
	top:10,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo2.add(titulo5);





//
// primer linea, primer text field
//
var turno = Ti.UI.createTextField({
	top : 80,
	left : 50,
	hintText : "Selecciona Turno",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,	  
});
var data5 =['','Primero','Segundo', 'Tercero', 'Otro']
turno.addEventListener('singletap', function(e){
	pickerGeneral(data5,turno);
});
flujo2.add(turno);

//
//primer linea, segundo text field
//
var nivelServicio = Ti.UI.createTextField({
	top: 80,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Selecciona Nivel de Servicio",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,  
});
var data5 =['','A','B', 'C']
nivelServicio.addEventListener('singletap', function(e){
	pickerGeneral(data5,nivelServicio);
});
flujo2.add(nivelServicio);





//
// segunda linea, primer text field
//
var metodoInspeccion = Ti.UI.createTextField({
	top : 150,
	left : 50,
	hintText : "Método de Inspección",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,	  
});
var data6 =['','Visual','Tactil', 'Auditivo','Funcional','Otro']
metodoInspeccion.addEventListener('singletap', function(e){
	pickerGeneral(data6,metodoInspeccion);
});
flujo2.add(metodoInspeccion);

//
//segunda linea, segundo text field
//
var tipoServicio = Ti.UI.createTextField({
	top: 150,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Tipo de Servicio",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,
});
var data7 =['','Inspeccion','Re trabajo', 'Insp y Re','CSII/CSI','GP12','Otro']
tipoServicio.addEventListener('singletap', function(e){
	pickerGeneral(data7,tipoServicio);
});
flujo2.add(tipoServicio);

//
// tercer linea, primer text field
//
var parteSeguridad = Ti.UI.createTextField({
	top : 220,
	left : 50,
	hintText : "¿las partes son de seguridad?",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,	  
});
var data8 =['','SI','NO']
parteSeguridad.addEventListener('singletap', function(e){
	pickerGeneral(data8,parteSeguridad);
});
flujo2.add(parteSeguridad);





//
//titulo de la seccion
//
var titulo6 = Titanium.UI.createLabel({
	text:'Herramientas, materiales y equipos',
	top:290,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo2.add(titulo6);





//
// cuarta linea, primer text field
//
var herramientas = Ti.UI.createTextField({
	top : 360,
	left : 50,
	hintText : "Herramientas",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,	  
});
flujo2.add(herramientas);

//
//cuarta linea, segundo text field
//
var material = Ti.UI.createTextField({
	top: 360,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Material Procesivo Especial",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
});
flujo2.add(material);


//
// quinta linea, primer text field
//
var equipo = Ti.UI.createTextField({
	top : 430,
	left : 50,
	hintText : "equipo de seguridad especial",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,	  
});
flujo2.add(equipo);

//
//quinta linea, segundo text field
//
var otros = Ti.UI.createTextField({
	top: 430,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Otros",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
});
flujo2.add(otros);



//
//titulo de la seccion
//
var titulo7 = Titanium.UI.createLabel({
	text:'Información Inicial del Servicio',
	top:500,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo2.add(titulo7);





//
// sexta linea, primer text field con spinner
//
var encontrado = Ti.UI.createTextField({
	top : 570,
	left : 50,
	hintText : "¿donde fue encontrado?",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,
});
var data9 =['','Linea','Almacen', 'Producto Term/Auto']
encontrado.addEventListener('singletap', function(e){
	pickerGeneral(data9,encontrado);
});
flujo2.add(encontrado);

//
//sexta linea, segundo text field con spinner
//
var lugarInspec = Ti.UI.createTextField({
	top: 570,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Lugar de Inspección",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,
});
var data10 =['','Linea','Almacen', 'Nave 38F']
lugarInspec.addEventListener('singletap', function(e){
	pickerGeneral(data10,lugarInspec);
});
flujo2.add(lugarInspec);




//
//titulo de la seccion
//
var titulo8 = Titanium.UI.createLabel({
	text:'Inventario',
	top:640,
	left : 50,
	font:{fontSize:'24dp'},
});
flujo2.add(titulo8);





//
// septima linea, primer text field con spinner
//
var linea = Ti.UI.createTextField({
	top : 710,
	left : 50,
	hintText : "linea",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
});
flujo2.add(linea);

//
//septima linea, segundo text field con spinner
//
var almacen = Ti.UI.createTextField({
	top: 710,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Almacen",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	});
flujo2.add(almacen);


//
// octava linea, primer text field con spinner
//
var transito = Ti.UI.createTextField({
	top : 780,
	left : 50,
	hintText : "Transito",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
});
flujo2.add(transito);

//
//octava linea, segundo text field
//
var tiempo = Ti.UI.createTextField({
	top: 780,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Tiempo",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	});
flujo2.add(tiempo);


//
// novena linea, primer text field con spinner
//
var paroLinea = Ti.UI.createTextField({
	top : 850,
	left : 50,
	hintText : "¿hubo paro de linea",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,
});
var data11 =['','SI','NO']
paroLinea.addEventListener('singletap', function(e){
	pickerGeneral(data11,paroLinea);
});
flujo2.add(paroLinea);

//
//novena linea, segundo text field
//
var tiempoEstandar = Ti.UI.createTextField({
	top: 850,
	left : 525,
	width : 425,
	height : '40dp',
	hintText : "Tiempo Estandar del Servicio",
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	});
flujo2.add(tiempoEstandar);


//
// novena linea, primer text field con spinner
//
var herramientasCliente = Ti.UI.createTextField({
	top : 920,
	left : 50,
	hintText : "¿Herramientas del Cliente?",
	width : 425,
	height : '40dp',
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	editable:false,
});
var data12 =['','SI','NO']
herramientasCliente.addEventListener('singletap', function(e){
	pickerGeneral(data12,herramientasCliente);
});
flujo2.add(herramientasCliente);




//////////////////////////////////////////////////////////////////////////////////////////////////






//////
//Firmas

var firmas = Ti.UI.createView({
	width:1024,
	height:600,
	top:0,
	left:0,
	backgroundColor:'#fff'
});

var firmasL = Ti.UI.createLabel({
	text:'Firmas',
	width : 900,
	height : 60,
	left : 100,
	top : 40,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
firmas.add(firmasL);

var elaboroFirma = Ti.UI.createLabel({
	height : 150,
	width : 350,
	top : 110,
	left : 100,
	borderColor:'#5d95b1'
	
});
firmas.add(elaboroFirma);

var elaboroLab= Ti.UI.createLabel({
	text:'Elaboro',
	height : 60,
	width : 200,
	top : 110,
	left : 460,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
firmas.add(elaboroLab);
var elaboroNombre = Ti.UI.createTextField({
	hintText:'Nombre',
	height : 60,
	width :400,
	top : 175,
	left : 460,
	borderColor : '#fff',
});
firmas.add(elaboroNombre);


var contactPlantaFirma = Ti.UI.createLabel({
	height : 150,
	width : 350,
	top : 280,
	left : 100,
	borderColor:'#5d95b1'
	
});
firmas.add(contactPlantaFirma);

var contactPlantaLab= Ti.UI.createLabel({
	text:'Contacto en Planta',
	height : 60,
	width : 400,
	top : 280,
	left : 460,
	font : {
		fontSize : '24dp',
		//fontWeight : 'bold',
		fontFamily:'Arial'
	}
});
firmas.add(contactPlantaLab);
var contactPlantaNombre = Ti.UI.createTextField({
	hintText:'Nombre',
	height : 60,
	width :400,
	top : 345,
	left : 460,
	borderColor : '#fff',
});
firmas.add(contactPlantaNombre);


botonEnviar = Ti.UI.createButton({
	title:'Enviar orden',
	top:500,
	left:650,
	width:200,
	height:60
});
firmas.add(botonEnviar);
//////
var scrollView = Ti.UI.createScrollableView({  
    views:[flujo1,planta,piezasV,flujo2,firmas],  
    showPagingControl:true,  
    clipViews:false,  
    pagingControlColor:'#000',
        top:0,  	
        left:0,  
        width:1024,
        height:600,  
});
servicio.add(scrollView); 

Ti.App.addEventListener('cerrarVentana', function(e) {
	e.ventana.close();
});

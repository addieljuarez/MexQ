//Esta funcion va a recibir 
//una serie de datos que se van a poner en un data
//regresara la seleccion hecha
function pickerGeneral(data, tf) {
	
	var ventanaPicker = Ti.UI.createWindow({
	opacity : .3,
	backgroundColor : '#000'
	});
	
	var picker = Titanium.UI.createPicker({
	useSpinner:true
	});
	
	var seleccion;
	var rows = [];
	
	for (var i = 0; i < data.length; i++) {
    	rows.push(Ti.UI.createPickerRow({title: data[i], fontSize:14}));
		}
	picker.add(rows);

	var boton = Ti.UI.createButton({
		top:450,
		left:500,
		title:'Ok',
		font : {
				fontSize : '14dp',
			},
	});
	
	picker.addEventListener('change', function(e){
		seleccion=e.row.title;
	});

	boton.addEventListener('click',function(e){
		tf.value=seleccion;
		ventanaPicker.close();
		
	});
	ventanaPicker.add(picker);
	ventanaPicker.add(boton);
	ventanaPicker.open();
}

function pickerFecha(tf) {
	var ventanaPicker = Ti.UI.createWindow({
	opacity : .3,
	backgroundColor : '#000'
	});
	
	var picker = Titanium.UI.createPicker({
	 type:Ti.UI.PICKER_TYPE_DATE,
  		minDate:new Date(2012,3,24),
  		maxDate:new Date(2014,11,31),
  		value:new Date(2014,3,12),
  		useSpinner:true
	});
	
	var seleccion;
	
	var boton = Ti.UI.createButton({
		top:450,
		left:500,
		title:'Ok',
		font : {
				fontSize : '14dp',
			},
	});
	
	picker.addEventListener('change', function(e){
		 var pickerdate = e.value;
    	var day = pickerdate.getDate();
    	var month = pickerdate.getMonth();
    	var year = pickerdate.getFullYear();
    	seleccion = day + "-" + month + "-" + year ;
	});
	
		

	boton.addEventListener('click',function(e){
		tf.value=seleccion;
		ventanaPicker.close();
		
	});
	ventanaPicker.add(picker);
	ventanaPicker.add(boton);
	ventanaPicker.open();

}


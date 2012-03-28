function utilizarCamara (imagen){
			Titanium.Media.showCamera({
			success : function(event) {
				var image = event.media;
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
					imagen.image = image;
				}
			},
			cancel : function() {
			},
			error : function(error) {
				var a = Titanium.UI.createAlertDialog({
					title : 'Camara'
				});
				if(error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Camara no instalada');
				} else {
					a.setMessage('Error Inesperado: ' + error.code);
				}
				a.show();
			},
			allowImageEditing : true,
			saveToPhotoGallery : false
		});
}

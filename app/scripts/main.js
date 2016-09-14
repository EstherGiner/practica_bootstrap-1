$("#btndatos").click(function() {
	console.log("Voy a hacer peticion ajax");

	$.ajax({
		url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php'
	})
	.done(function(futbolistas) {
		var registro="";
		$.each(futbolistas, function(index, futbolista) {
           registro += "<tr><td>" + futbolista.nombre + "</td><td>" + futbolista.apellido + "</td><td>"
               + futbolista.equipo + "</td></tr>"
		});
		$("#datos").html(registro);
		$("#tblfutbolistas").css("display", "block");
		
	});
	


});
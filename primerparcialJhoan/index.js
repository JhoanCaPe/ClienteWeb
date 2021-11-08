var j1, j2, j3, j4, j5, j6;
var jugadores = 2;
turno = 1;

$(document).ready(function(){
	
	$(".jugador div").click(function(){
		if("j"+turno != $(this).parent().attr('id')){
			alert("No es tu turno")
			return
		}
		$(this).toggleClass("usar")
	});
	$("#siguiente").click(function(){
		$("#j"+ turno).toggleClass("jugando")
		if(turno == jugadores){
			$(this).remove();
			
			for(i = 1; i <= jugadores; i++) $("#j" + i + " input").css("visibility", "visible");
			
			return;
		}
		$("#j"+ ++turno).toggleClass("jugando")
		
	})
});
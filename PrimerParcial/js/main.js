let chinos = ['first.png', 'hand.png', 'hand1.png', 'hand2.png', 'hand3.png', 'medal.png'];
let jugadores = ["jugador1", "maquina"]
var apuesto;



$(document).on('input', '#apuesto', function(){
    var apuesto = $("#apuesto").val();
    document.getElementById("textoapuesta").innerHTML = "Apuesto: " + apuesto
})

$(document).on('input', '#llevo', function(){
    var llevo = $("#llevo").val();
    document.getElementById("manojugador").innerHTML = "Hello"
})


/**$(document).ready(function(){
	
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
}); */
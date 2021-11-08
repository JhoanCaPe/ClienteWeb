let tablero = [];
let fichas = ["X", "O"];
var turno = Math.round(Math.random());
let colores = ["purple", "#663300"]

$("#turno").ready().append(fichas[turno]);

$("button").click(function(event){
    if($(this).val() === '1'){
        alert("che para no pulses las del otro")
        return
    }
    if($("#turno").text().match("GANADOR")){
        alert("Ya hay GANADOR!!!")
        return
    }
    $(this).css("backgroundColor",colores[turno]);
    $(this).text(fichas[turno]);
    tablero[$(this).prevAll().length] = fichas[turno++]
    $(this).val(1);
    turno = turno % 2;
    $("#turno").text("TURNO DE: " + fichas[turno]);
    
    /* FORMULA EMPATE */
    var continuar = 0;
    for(i = 0; i < 9; i++){
        if(tablero[i] == undefined){
            continuar++;
        }
    }

    if(continuar == 0){
        $("#turno").text("EMPATE");
    }

    /* GANAR */
    if(tablero[0] === tablero[1] && tablero[0] === tablero[2]){
        if(tablero[0] == undefined){return}
       $("#turno").text("GANADOR: " + tablero[0]);
    } else if(tablero[3] === tablero[4] && tablero[3] === tablero[5]){
        if(tablero[3] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[3]);
    }else if(tablero[6] === tablero[7] && tablero[6] === tablero[8]){
        if(tablero[6] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[6]);
    }else if(tablero[0] === tablero[3] && tablero[0] === tablero[6]){
        if(tablero[0] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[0]);
    }else if(tablero[1] === tablero[4] && tablero[1] === tablero[7]){
        if(tablero[1] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[1]);
    }else if(tablero[2] === tablero[5] && tablero[2] === tablero[8]){
        if(tablero[2] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[2]);
    }else if(tablero[0] === tablero[4] && tablero[0] === tablero[8]){
        if(tablero[0] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[0]);
    }else if(tablero[2] === tablero[4] && tablero[2] === tablero[6]){
        if(tablero[2] == undefined){return}
        $("#turno").text("GANADOR: " + tablero[2]);
    }
    
})


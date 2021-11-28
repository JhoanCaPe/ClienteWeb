var izquierda = 'imagenes/left.png'
var derecha = 'imagenes/right.png'
var key = 'imagenes/key.png'
var closed1 = 'imagenes/closed1.png'
var closed2 = 'imagenes/closed2.png'
var contadorJugador = 0;
var contadorMaquina = 0;
var llave = Math.round(Math.random());

$("img").click(function (event){
    if($(this).attr('class') != 'pulsado'){
        if(llave == 0){
            $("#izquierda").attr("val", "tieneLlave")
            $("#derecha").attr("val", "no")
        }else if( llave == 1){
            $("#derecha").attr("val", "tieneLlave")
            $("#izquierda").attr("val", "no")
        }
    
        if($(this).attr('val') === 'tieneLlave'){
            $(this).attr('src', key);
            otraMano($(this).attr('id'), true);
            contadorJugador++;
            $("#contadorJugador").text("Puntos del jugador: " + contadorJugador );
        }
        if($(this).attr('val') === 'no'){
            switch($(this).attr('id')){
                case 'izquierda' :  $(this).attr('src', izquierda); break;
                case 'derecha' :  $(this).attr('src', derecha); break;
            }
           
            otraMano($(this).attr('id'), false);
            contadorMaquina++;
            $("#contadorMaquina").text("Puntos de la maquina: " + contadorMaquina );
        }
    }
    $("img").addClass('pulsado')

    console.log($(this).attr("id"))
    console.log($(this).attr("val"))
})


async function otraMano(mano, acierto){
    if(acierto){
        if(mano == 'izquierda'){
            await sleep(1000);
            $("#derecha").attr('src', derecha);
            console.log(24)
        }else{
            await sleep(1000);
            $("#izquierda").attr('src', izquierda);
        }
    }else{
        if(mano == 'izquierda'){
            await sleep(1000);
            $("#derecha").attr('src', key);
            console.log(24)
        }else{
            await sleep(1000);
            $("#izquierda").attr('src', key);
        }
    }
    await sleep(2000);
    normal();
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function normal(){
    $("#izquierda").attr('src', closed1);
    $("#derecha").attr('src', closed2);
    llave = Math.round(Math.random());
    $("img").removeClass('pulsado');
    $(".pista").remove();
    
}

function reset(){
    contadorMaquina = 0;
    $("#contadorMaquina").text("Puntos de la maquina: " + contadorMaquina );
    contadorJugador = 0;
    $("#contadorJugador").text("Puntos del jugador: " + contadorJugador );
    normal();
    console.log($("img").is(':animated'))
}

function clue(){
    
        if(llave){
            $('.pista').hasClass('pista') ? 1 : $("#pista").parent().append('<br><div class="pista">La llave esta en la mano derecha.</div>')
            $("#derecha").shake(100,10,3)
        }else{
            $('.pista').hasClass('pista') ? 1 : $("#pista").parent().append('<br><div class="pista">La llave esta en la mano izquierda.</div>')
            $("#izquierda").shake(100,10,3)
        }
       
}


jQuery.fn.shake = function(interval,distance,times){
    $("img").dequeue()
    
    interval = typeof interval == "undefined" ? 100 : interval;
    distance = typeof distance == "undefined" ? 10 : distance;
    times = typeof times == "undefined" ? 3 : times;
    var jTarget = $(this);
    jTarget.css('position','relative');
    for(var iter=0;iter<(times+1);iter++){
       jTarget.animate({ left: ((iter%2==0 ? distance : distance*-1))}, interval);
    }
    return jTarget.animate({ left: 0},interval);
 }
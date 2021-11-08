function main(){
    reloj();
    fecha();
}

function reloj(){
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();

    stringSeg = new String (segundos);
    if(stringSeg.length == 1) {segundos = '0' + segundos;}

    stringMin = new String (minutos);
    if(stringMin.length == 1) {minutos = '0' + minutos;}

    stringHor = new String (hora);
    if(stringHor.length == 1) {hora = '0' + hora;}

    var refresh = setInterval(reloj,1000);
    document.getElementById('reloj').innerHTML = hora + ":" + minutos + ":" + segundos;

} 

function fecha(){
    var fecha  = new Date();
    var año = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDay();

    stringDia = new String(dia);
    if(stringDia.length == 1){dia = "0" + dia};

    stringMes = new String(mes);
    if(stringMes.length == 1){mes = "0" + mes};

    stringAño = new String(año);
    if(stringAño.length == 1){año = "0" + año};

    var refresh = setInterval(fecha, 1000);
    document.getElementById("fecha").innerHTML = dia + "/" + mes + "/" + año; 

}
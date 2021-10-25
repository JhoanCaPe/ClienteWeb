function getOperador(operation){
    if(operation.includes("+"))
        return '+';
    else if(operation.includes("-"))
        return '-';
    else if(operation.includes("*"))
        return '*';
    else if(operation.includes("/"))
        return '/';
    else
        return '';
}

$(function(){

    const pantalla = $("#pantalla");

    $("button").click(function(){
        if ($(this).text() === "="){
            const operation = pantalla.val(); // 3 + 4
            const operador = getOperador(operation); // +
            const operands = operation.split(operador); // [3 , 4]
        }
        else if($(this).text() === "C"){
            pantalla.val("");
        }
        else if($(this).text() === "!"){
            //Consulta con api.mathjs.org/v4/?expr=
        }
        else{
            const currentValue = pantalla.val();
            const newValue = currentValue + $(this).text();
            pantalla.val(newValue);
        }
    });
});
// Declaracion funcion tradicional
function suma() {
    console.log(2 + 2);
}
suma();

//Declaracion funcion con parametros
function sumaPar(sum1, sum2){
    let resultado = sum1 + sum2;
    return resultado;
}
//let resultado = sumaPar(4, 7);
console.log(sumaPar(4, 7));

//Valores por defecto
function saludo(name = 'Nayra'){
    console.log('Hello ' + name);
}
saludo();
saludo('clase ciber');

//Funcion anonima
var resSaludo = function(name = 'nayra'){
    return 'Hello ' + name;
}

console.log(resSaludo());
console.log(resSaludo('clase'));

//Funciones arrow 
var resArrowSaludo = (name) => `Hello ${name}`
var resArrowDespedida = (name) => {
    return 'Bye ' + name;
}

console.log(resArrowSaludo('Lola'));
console.log(resArrowDespedida('pepe'));

//Condicional tradicional vs ternario
const budget = 100;
if (budget >= 200){
    console.log('Me voy de viaje');
} else {
    console.log('No me voy de viaje');
}
let result = budget >= 200
    ? console.log('Me voy de viaje')
    : console.log('No me voy');

    





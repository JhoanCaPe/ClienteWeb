// Declaracion funcion tradicional
function suma() {
    console.log(2+2);
}

suma();

// Declaracion funcion con parametros
function sumaParametros(sum1, sum2){
    return sum1 + sum2;
}

let resultado = sumaParametros(4,25);
console.log(resultado);

// Valores por defecto
function saludo(name = 'Mr V'){
    console.log("Hello " + name)
}

saludo();
saludo("clase ciber");

// Funcion anonima
var resSaludo = function(name = 'Mr V'){
    return 'Hello ' + name;
}

console.log(resSaludo());
console.log(resSaludo('tt'));

//Funcion arrow
var resArrowSaludo = (name) => `Hello ${name}`
var resArrowDespedida = (name) => {
    return 'Bye ' + name;
}

console.log(resArrowSaludo('Lola'));
console.log(resArrowDespedida('Pepe'));

//Condicional tradicional vs ternario
const budget = 100;
if(budget >= 200){
    console.log("Me voy de viaje");
} else{
    console.log('No me voy de viaje');
}
let result = budget >= 300
    ? console.log('Me voy de viaje')
    : console.log('No me voy')

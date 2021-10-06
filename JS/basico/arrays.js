var empty = [];

var numbers = [
    'zero', 'one' , 'two' , 'three' , 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

empty[1]    // undifined
numbers[1]  // 'one'

empty.length    // 0
numbers.length  // 10

// Pueden contener elementos de distinto tipo
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];

// Propiedad lenght
misc.length

var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12]

for(var i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log(numeros[i])
    }
}
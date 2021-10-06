// Cuidado, los objetos en javascript son siempre referencis, no valores, son mutables:
const person = {
    firstName: 'Mr V',
    lastName: 'unknown',
    age: 10,
    eyecolor: 'brown'
}

const x = person;
x.age = 23;
console.log(person);
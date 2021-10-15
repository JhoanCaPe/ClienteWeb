//Funcion para añadir elemento a una lista
function createTaskElement(elementToAppend, title) {
    var li = document.createElement('li');
    li.textContent = title;
    elementToAppend.appendChild(li);
}

/*Añadir codigo al evento 'click' del boton 'create_button', que lo que haga sea llamar a la funcion que 
añade elementos a la lista pasandole el contenido del input task_title
*/
var buttonToCreate = document.getElementById('create_button');
buttonToCreate.addEventListener('click', function (event) {
    var inputValue = document.getElementById('task_title');
    
    if (inputValue.value !== '') {
        createTaskElement(todoListElement, inputValue.value);
    } else {
        alert('No puedes guardar una lista vacia.')
    }

    inputValue.value = '';
});

/*Añadir codigo al evento 'input' del input de texto 'task_title', que lo que haga sea cambiar el color de fondo
en caso que la caja este vacia, o no tenga un valor aceptable, solo letras segun una expresión regular
*/
var inputElement = document.getElementById('task_title');
// inputElement.addEventListener('keyup', function(event) {
// inputElement.addEventListener('keypress', function(event) {
inputElement.addEventListener('input', function(event) {
    var inputValue = event.target.value;
    var regex = /^[A-Z]/;
    
    if(regex.test(inputValue) || inputValue === '') {
        console.log(this);
        this.style.backgroundColor = 'lightgreen';
    } else {
        this.style.backgroundColor = 'tomato';
    }
});

// Carga inicial de la lista
const tasks = [
    { title: 'Hacer la colada' },
    { title: 'Preparar la cena' },
    { title: 'Tirar la basura' },
];

var todoListElement = document.querySelector('#todo_list');
for (var i = 0; i < tasks.length; i += 1) {
    var task = tasks[i];
    createTaskElement(todoListElement, task.title);
}
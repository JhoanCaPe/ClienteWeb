// Inicializacion de la lista tareas
const tasks = [
    { title: "Practica 1 ciber"},
    { title: "Estudiar examen primer parcial"},
    { title: "Practica gestion de proyectos"}
];

const todoListElement = $("#todo_list");

for(var i = 0; i < tasks.length ; i+=1){
    let task = tasks[i];
    createTaskElement(todoListElement, task.title);
}

function createTaskElement(elementToAppend, title){
    var li = document.createElement('li');
    li.textContent = title;
    elementToAppend.append(li);
}

$("$create_button").click(function(){
    let varEntrada = $("#task_title").val();
    if(varEntrada !== ''){
        createTaskElement(todoListElement, varEntrada);
    } else{
        alert('no puedes guardar una lista vacia');
    }

    $("#task_title").val('');
});

$("task_title").on({
    keypress: function(event){
        let inputValue = event.target.value;
        let regex = /^[A-Z]/;

        if(regex.test(inputValue) || inputValue === ''){
            $(this).css("backgroundColor",'lightgreen');
        }
        else
            $(this).css("backgroundColor",'tomato');
        }
    }
);
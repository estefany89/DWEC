//Ejercicio 5 JavaScript: Agregar tareas a un listado

const tareaInput = document.getElementById("newTaskInput");
const agregarBtn = document.getElementById("addTaskBtn");
const tareaLista = document.getElementById("taskList");

function agregarTarea() {
    const tarea = tareaInput.value.trim(); 
    if (!tarea) return; 

    const item = document.createElement("li");
    item.textContent = tarea;

   
    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "X";
    eliminarBtn.classList.add("deleteBtn");
    eliminarBtn.onclick = () => item.remove();

    item.appendChild(eliminarBtn);
    tareaLista.appendChild(item);

    tareaInput.value = ""; 
}

agregarBtn.onclick = agregarTarea;

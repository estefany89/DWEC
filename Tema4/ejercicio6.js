//Ejercicio 6: Selección aleatoria de nombres  
// Selección de elementos

const inputNombre = document.getElementById("inputName");
const btnAgregar = document.getElementById("addBtn");
const listaNombres = document.getElementById("nameList");
const btnAleatorio = document.getElementById("randomBtn");


const nombres = [];

function agregarNombre() {
    const nombre = inputNombre.value.trim();
    if (!nombre) return; 

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

function actualizarLista() {
    listaNombres.innerHTML = "";
    nombres.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        listaNombres.appendChild(item);
    });
}

function seleccionarAleatorio() {
    if (nombres.length === 0) return alert("No hay nombres en la lista.");

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    alert(`Nombre seleccionado: ${nombres[indiceAleatorio]}`);
}

btnAgregar.onclick = agregarNombre;
btnAleatorio.onclick = seleccionarAleatorio;

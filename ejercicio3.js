// Ejercicio 3: Escribe el código JavaScript necesario para que el formulario funcione correctamente.

const newItemInput = document.getElementById('newItemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');

function añadirItem() {


    let item = newItemInput.value.trim();

    if (item === '') {
        alert('Cadena vacía, por favor ingrese un item');
        return;
    }
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = item;
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.classList.add('completeBtn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('deleteBtn');

    completeBtn.addEventListener('click', function(){
        nuevoItem.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', function(){
        itemsList.removeChild(nuevoItem);
    });

    nuevoItem.append(completeBtn, deleteBtn);

    itemsList.append(nuevoItem);

    newItemInput.value = '';
}

addItemBtn.addEventListener('click', añadirItem)


//CSS
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }
    #taskContainer {
    width: 400px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    }
    h1 {
    text-align: center;
    color: #FF5722;
    }
    .inputContainer {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    }
    input[type="text"] {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    }
    .inputContainer button {
    padding: 10px;
    background-color: #FF5722;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    }
    inputContainer button:hover {
    background-color: #E64A19;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    }
    li:last-child {
    border-bottom: none;
    }
    .completed {
    text-decoration: line-through;
    color: #999;
    }
    .completeBtn, .deleteBtn {
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    }
    .completeBtn:hover, .deleteBtn:hover {
    color: #FF5722;
    }
    .material-icons {
    font-size: 24px;
    color: black;
    cursor: pointer;
    transition: color 0.3s;
    }
    .material-icons:hover {
    color: #FF5722;
    }
    .deleteBtn {
    order: 3;
    }
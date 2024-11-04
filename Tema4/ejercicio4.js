/*
Ejercicio 4 JavaScript: Ocultar y mostrar elementos 
mediante JavaScript 
*/

const caja = document.getElementById('box');
const boton = document.getElementById('toggleBtn');

function alternarVisibilidad() {
    
    if (caja.style.display === 'none') {

        caja.style.display = 'block';

    } else{

        caja.style.display = 'none';
        
    }
}

boton.addEventListener('click', alternarVisibilidad);


//CSS

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #f4f4f4;
    }
    #container {
    text-align: center;
    }
    #box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    margin: 20px auto;
    }
    button {
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #2ecc71;
    color: #fff;
    font-size: 16px;
    transition: background-color 0.3s;
    }
    button:hover {
    background-color: #27ae60;
    }
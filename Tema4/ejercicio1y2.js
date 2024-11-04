/*
Ejercicio JavaScript tipo examen: Mostrar frasesFrikisInformatica aleatorias mediante CSS 
*/

const boton = document.getElementById('ver-mas-boton');

const frasesFrikisInformática = [
    "Sí, probé a apagarlo y encenderlo de nuevo.",
    "En la nube, todo es bonito... hasta que no encuentras tu archivo." ,
    "Si funciona",
];

boton.addEventListener("click", function (){
    let fraseAleatoria = parseInt(Math.random() * frasesFrikisInformática.length);
    document.getElementById('texto-informatica').textContent = frasesFrikisInformática[fraseAleatoria];



// Ejercicio 2: añadir color aleatorio
    document.getElementById('texto-informatica').style.color = colores[Math.floor(Math.random() * colores.length)];
});

var colores = [
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#80ffff",  // Cian claro
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#ff0000", // Rojo
    
    ];




    #contenido-informatica {
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
        }
        #texto-informatica {
        font-size: 18px;
        color: #333;
        margin-bottom: 20px;
        }
        #ver-mas-boton {
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        }
        #ver-mas-boton:hover {
        background-color: #0056b3;
        }
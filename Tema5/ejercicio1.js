//1. En este script deberás crear un array para guardar los nombres de los días de la semana,
//empezando por 0 para el domingo. Para comprobar el funcionamiento pide al usuario un
//número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará
//entre 0 y 6.

let dias =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado" ];
let numero = parseInt(prompt("Ingrese un número del 0-6"))

if(numero >= 0 && numero <= 6){
    alert("El dia de la semana es: "  + dias[numero])
    } else {
        alert("Por favor ingrese un número valido entre 0 - 6")  
    }

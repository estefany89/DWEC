// TAREA DE JAVASCRIPT

// 1
let String = "Hola JavaScript";
console.log(String);

// 2
let edad = 35; 
console.log(edad);

// 3
let bolean = false; 
console.log(bolean);

// 4
let Null = null; 
let Undefined; 

console.log("Variable Null:", Null); 
console.log("Variable Undefined:", Undefined);

// 5
const art = {
    name: "play5",
    price: 850,
    category: "VideoJuego"
};
console.log(art);

// 6
const ciudades = ["Ibiza", "Mallorca", "Menorca", "Tenerife"];
console.log(ciudades);

// 7
let colorFavorito = "Rojo";
colorFavorito = "Negro";
console.log("Color favorito inicial: Rojo");
console.log("Color favorito modificado: " + colorFavorito);

// 8
let variableSV;
let variableCN = null;
console.log("Variable sin valor:", variableSV);
console.log("Variable con null:", variableCN);

// 9
let variableGlobal = "Soy global";

function miFuncion() {
    let variableLocal = "Soy local";
    console.log(variableLocal);     
    console.log(variableGlobal);    
}

miFuncion();
console.log(variableGlobal);  

// 10
let nombreValido1 = "Camila";
let nombreValido2 = "Carlos";
console.log("Nombres de variables válidos:");
console.log(nombreValido1);
console.log(nombreValido2);

// 11
let a = 10;
let b = 5;

console.log("Suma:", a + b);      
console.log("Resta:", a - b);       
console.log("Multiplicación:", a * b); 
console.log("División:", a / b);     
console.log("Módulo:", a % b);       
a++; 
console.log("Incremento (a++):", a);
b--; 
console.log("Decremento (b--):", b);

// 12
let textoMultilinea = "Hola,\n\tprograma.\n\ten.\nJavaScrip!";
console.log(textoMultilinea);

// Ejercicio 2 JS: Estructuras de control
// Condicionales (if, else if, else):

// 1
let numero = prompt("Ingresa un número:");

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 2

let edadUsuario = prompt("Ingresa tu edad:");

if (edadUsuario < 18) {
    console.log("Eres menor de edad.");
} else if (edadUsuario >= 18 && edadUsuario < 65) {
    console.log("Eres adulto.");
} else {
    console.log("Eres anciano.");
}

// 3
for (let i = 0; i <= 4; i++) {
    console.log(i);
}

// 4
let contador = 0;
while (contador <= 4) {
    console.log(contador);
    contador++;
}

// 5
let x = 0;
do {
    console.log(x);
    x++;
} while (x <= 4);

// 6
for (let i = 0; i <= 4; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

// 7
for (let j = 0; j <= 4; j++) {
    if (j === 2) {
        continue; 
    }
    console.log(j);
}

// 8
let mesNumero = prompt("Ingresa un número del 1 al 12 para saber el mes correspondiente:");

switch (parseInt(mesNumero)) {
    case 1:
        console.log("El mes es: Enero");
        break;
    case 2:
        console.log("El mes es: Febrero");
        break;
    case 3:
        console.log("El mes es: Marzo");
        break;
    case 4:
        console.log("El mes es: Abril");
        break;
    case 5:
        console.log("El mes es: Mayo");
        break;
    case 6:
        console.log("El mes es: Junio");
        break;
    case 7:
        console.log("El mes es: Julio");
        break;
    case 8:
        console.log("El mes es: Agosto");
        break;
    case 9:
        console.log("El mes es: Septiembre");
        break;
    case 10:
        console.log("El mes es: Octubre");
        break;
    case 11:
        console.log("El mes es: Noviembre");
        break;
    case 12:
        console.log("El mes es: Diciembre");
        break;
    default:
        console.log("Número inválido. Por favor, ingresa un número del 1 al 12.");
}

// Ejercicio 3 JS: Funciones

// 1
let radioUsuario = parseFloat(prompt("Ingrese el radio del círculo:"));

// 2
function obtenerArea(radioCirculo) {
  return Math.PI * Math.pow(radioCirculo, 2);
}

// 3
function obtenerPerimetro(radioCirculo) {
  return 2 * Math.PI * radioCirculo;
}

// 4
let resultadoArea = obtenerArea(radioUsuario);
let resultadoPerimetro = obtenerPerimetro(radioUsuario);

console.log(`El área del círculo es: ${resultadoArea.toFixed(2)}`);
console.log(`El perímetro del círculo es: ${resultadoPerimetro.toFixed(2)}`);

// Ejercicio 3.2: Calcular Potencia

// 1
function calcularPotencia(baseNumero, exponenteNumero) {
    return Math.pow(baseNumero, exponenteNumero);
}

let potenciaResultado = calcularPotencia(2, 3);
console.log(potenciaResultado); 

// Ejercicio 4 JS: Arrays

// 1
let cantidadElementos = parseInt(prompt("Ingrese la cantidad de números que quiere introducir:"));
let listaNumeros = [];

// 2
for (let indice = 0; indice < cantidadElementos; indice++) {
    let numeroIngresado = parseFloat(prompt(`Ingrese el número ${indice + 1}:`));
    listaNumeros.push(numeroIngresado);
}

// 3
function encontrarMayorNumero(arrayNumeros) {
    let numeroMayor = arrayNumeros[0];
    for (let posicion = 1; posicion < arrayNumeros.length; posicion++) {
        if (arrayNumeros[posicion] > numeroMayor) {
            numeroMayor = arrayNumeros[posicion];
        }
    }
    return numeroMayor;
}

// 4
let mayorElemento = encontrarMayorNumero(listaNumeros);
console.log(`El número más grande es: ${mayorElemento}`);

// Ejercicio 5.1: Bucle for

// 1
for (let contador = 20; contador <= 30; contador++) {
    console.log(contador);
}

// 2
for (let numeroPar = 30; numeroPar <= 50; numeroPar++) {
    if (numeroPar % 2 === 0) {
        console.log(numeroPar);
    }
}

// 3
let totalSuma = 0;
for (let numero = 1; numero <= 50; numero++) {
    totalSuma += numero;
}
console.log(`La suma de los primeros 50 números naturales es: ${totalSuma}`);

// 4
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`8 x ${multiplicador} = ${8 * multiplicador}`);
}

// 5
let listaElementos = [10, 20, 30, 40, 50];
for (let indiceElemento = 0; indiceElemento < listaElementos.length; indiceElemento++) {
    console.log(listaElementos[indiceElemento]);
}

// 6
let alturaTriangulo = 9;
for (let fila = 1; fila <= alturaTriangulo; fila++) {
    console.log('*'.repeat(fila));
}

// 7
let sumaParesNumeros = 0;
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        sumaParesNumeros += num;
    }
}
console.log(`La suma de los números pares del 1 al 50 es: ${sumaParesNumeros}`);

// 8
for (let numeroDescendente = 30; numeroDescendente >= 20; numeroDescendente--) {
    console.log(numeroDescendente);
}

// 9
let listaValores = [10, 15, 20, 25, 30];
let sumaValores = 0;
for (let posicionArray = 0; posicionArray < listaValores.length; posicionArray++) {
    sumaValores += listaValores[posicionArray];
}
let promedioValores = sumaValores / listaValores.length;
console.log(`El promedio del array es: ${promedioValores}`);

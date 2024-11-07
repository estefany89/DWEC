//Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno
//mostrará el array y deberá decir cuántos números son pares y cuantos son impares. La
//entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.
//Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays. No
//debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).

var numeros = [];


var pares = 0;
var impares = 0;

while (true) {

var entrada = prompt("Introduce un número (0 para terminar):");

if (entrada === "0" || isNaN(entrada)) {
break; 
}

var numero = parseInt(entrada);

numeros[numeros.length] = numero; 
if (numero % 2 === 0) {
pares++; 
} else {
impares++; 
}
}

alert("El array de entrada es: [" + numeros.join(", ") + "]");
alert("Hay " + pares + " números pares y " + impares + " números impares.");

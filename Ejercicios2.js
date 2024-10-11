//Ejercicio 1: Calculadora de gastos de viaje

function calcGastos() {
let aloj = parseFloat(prompt("Gastos de alojamiento:"));
let alim = parseFloat(prompt("Gastos de alimentación:"));
let entre = parseFloat(prompt("Gastos de entretenimiento:"));
let total = aloj + alim + entre;
alert(`El coste total del viaje es ${total.toFixed(2)}€`);
}

calcGastos();

//Ejercicio 2: Calculadora edad canina

function edadHumanaPerro() {
let edad = parseInt(prompt("Edad del perro:"));
let edadHumana = edad * 7;
alert(`La edad del perro en años humanos es ${edadHumana}`);
}

edadHumanaPerro();

//Ejercicio 3: Calculadora de IMC (Índice de Masa Corporal)

function calcIMC() {
let peso = parseFloat(prompt("Peso (kg):"));
let altura = parseFloat(prompt("Altura (m):"));
let imc = peso / (altura * altura);
let clasif = imc < 18.5 ? "Bajo peso" : imc < 25 ? "Normal" : imc < 30 ? "Sobrepeso" : "Obesidad";
alert(`IMC: ${imc.toFixed(2)}, Clasificación: ${clasif}`);
}

calcIMC();

//Ejercicio 4: Calculadora de descuentos

function calcDescuento() {
let precio = parseFloat(prompt("Precio original:"));
let desc = parseFloat(prompt("Porcentaje de descuento:"));
let final = precio - (precio * (desc / 100));
alert(`Precio final: ${final.toFixed(2)} euros.`);
}

calcDescuento();

//Ejercicio 5: Generador de números primos

function esPrimo(num) {
if (num <= 1) return false;
for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
}
return true;
}

function genPrimos() {
let inicio = parseInt(prompt("Número inicial:"));
let fin = parseInt(prompt("Número final:"));
let primos = [];
for (let i = inicio; i <= fin; i++) {
if (esPrimo(i)) primos.push(i);
}
alert(`Números primos: ${primos.join(", ")}`);
}

genPrimos();

//Ejercicio 6: Generador de secuencia Fibonacci

function fib(n) {
let sec = [0, 1];
for (let i = 2; i < n; i++) sec.push(sec[i - 1] + sec[i - 2]);
return sec;
}

function mostrarFib() {
let n = parseInt(prompt("Número de términos:"));
let secuencia = fib(n);
alert(`Fibonacci: ${secuencia.join(", ")}`);
}

mostrarFib();

//Ejercicio 7: Conversor de temperatura


function convTemp() {
let tipo = parseInt(prompt("1: Celsius a Fahrenheit, 2: Fahrenheit a Celsius"));
let temp = parseFloat(prompt("Temperatura:"));
let resultado = tipo === 1 ? (temp * 9/5) + 32 : (temp - 32) * 5/9;
let unidad = tipo === 1 ? "Fahrenheit" : "Celsius";
alert(`Equivale a ${resultado.toFixed(2)} grados ${unidad}`);
}

convTemp();

//Ejercicio 8: Calcular factorial


function calcFactorial(num) {
let res = 1;
for (let i = 1; i <= num; i++) res *= i;
return res;
}

function mostrarFactorial() {
let num = parseInt(prompt("Número entero no negativo:"));
let fac = num >= 0 ? calcFactorial(num) : "Inválido";
alert(`El factorial de ${num} es ${fac}`);
}

mostrarFactorial();
//2. Crea un array booleano con dos valores 'verdadero' y 'falso'. Este array te sirve para
//traducir los valores true y false. Usalo para que el script muestre un alert con el nombre
//vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.

var booleanos = ["falso", "verdadero"];
var numero = prompt("Introduce un número entre 0 y 9:");
var esValido = (numero >= 0 && numero <= 9);
alert(booleanos[esValido ? 1 : 0]);

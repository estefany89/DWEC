//3. Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de
//sumar todos los números que forman el array que se le pase como argumento.

function sumaLista(lista) {
var suma = 0;

for (var i = 0; i < lista.length; i++) {
suma += lista[i]; 
}
return suma;
}

var resultado = sumaLista([2, 4, 5, 1, 2]);
alert(resultado); 

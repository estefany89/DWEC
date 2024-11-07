//Escribe una función que pueda devolver el valor más pequeño de un array numérico o el
//índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o
//el índice ("i"). No uses métodos del objeto array.
//Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número
//y sin duplicados. Se supone que el segundo parámetro será una letra con uno de dos valores: 'v' 'i'.

function min(arr, opcion) {
    var menor = arr[0];  
    var indice = 0;    

for (var j = 1; j < arr.length; j++) {
if (arr[j] < menor) {
  menor = arr[j];  
        indice = j;       
      }
    }
  
    if (opcion === 'v') {
      return menor;  
    } else {
      return indice; 
    }
  }
  
alert(min([4, 5, 7], 'v')); 
alert(min([4, 5, 7], 'i')); 
  
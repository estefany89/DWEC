function esCurioso(numero) {
    const digitos = String(numero).split(""); // Convierte el número a string y luego en un array de caracteres
    const sumaCubos = digitos.reduce((suma, digito) => suma + Math.pow(parseInt(digito), 3), 0);  // Calcula la suma de los cubos de cada dígito.
    //reduce aplica la funcion que suma los resultados
    //math calcula el cubo de cada digito y 0 es el valor inicial del acumulador
    return sumaCubos === numero; // Compara la suma si es original retorna true caso contrario false
}







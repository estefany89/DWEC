function validacion() {
    // Verifica que todos que los campos obligatorios estén llenos
    let nombre = document.getElementById('nombre').value; //accede al elemento (getElementById) declarado con el(let)
    let primerApellido = document.getElementById('primerApellido').value;
    let segundoApellido = document.getElementById('segundoApellido').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let estudios = document.querySelector('input[name="estudios"]:checked');
    let comentario = document.getElementById('comentario').value;

    // Valida los campos obligatorios
    if (!primerApellido || !segundoApellido || !telefono || !email || !password || !sexo || !estudios || !comentario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false; // Impide el envío del formulario
    }

    // Valida el teléfono
    let telefonoRegex = /^[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El número de teléfono no tiene el formato correcto.");
        return false;
    }

    // Valida el correo electrónico
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no tiene el formato correcto.");
        return false;
    }

    return true; // Permite el envío del formulario
}


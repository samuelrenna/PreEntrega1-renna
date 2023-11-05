const simuladorBtn = document.getElementById("inicio");
simuladorBtn.addEventListener("click", function() {

    function esNombrePersonaValido(nombre) {
        return /^[A-Za-z\s]+$/.test(nombre);
    }
    let nombreIngresado;
    let nombreUsuario;
    let razaPersonaje;
    let tipoPersonaje;

    do {
        nombreIngresado = prompt("Bienvenido, ¿cuál es tu nombre?");
    
        if (!nombreIngresado) {
            alert("Por favor, ingresa un nombre válido. El campo no puede quedar vacío.");
        } else if (!esNombrePersonaValido(nombreIngresado)) {
            alert("Por favor, ingresa un nombre válido sin números ni caracteres especiales.");
        }
    } while (!nombreIngresado || !esNombrePersonaValido(nombreIngresado));

});
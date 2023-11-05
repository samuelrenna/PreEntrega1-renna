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

    while (!nombreUsuario) {
        alert("Por favor, ingresa un nombre de usuario válido. El campo no puede quedar vacío.");
        nombreUsuario = prompt(nombreIngresado + ", ahora crea tu nombre de usuario:");
    }
    
    while (nombreUsuario === nombreIngresado) {
        alert("El nombre de usuario no puede ser igual al nombre ingresado. Por favor, elige otro nombre de usuario.");
        nombreUsuario = prompt("Elige un nombre de usuario diferente:");
    }

    let personaje1;

    do {
        personaje1 = prompt("Elige tu tipo de personaje: perro o gato");

        if (personaje1 === "perro") {
            razaPersonaje = prompt("Elige la raza de tu perro: bulldog, doberman o poodle");
            while (razaPersonaje !== "bulldog" && razaPersonaje !== "doberman" && razaPersonaje !== "poodle") {
                razaPersonaje = prompt("Por favor, elige una raza válida para tu perro: bulldog, doberman o poodle");
            }
        } else if (personaje1 === "gato") {
            razaPersonaje = prompt("Elige la raza de tu gato: siamés, persa, montés");
            while (razaPersonaje !== "siames" && razaPersonaje !== "persa" && razaPersonaje !== "montes") {
                razaPersonaje = prompt("Por favor, elige una raza válida para tu gato: siamés, persa o montés");
            }
        } else {
            alert("Por favor, elige un tipo de personaje válido (perro o gato).");
        }
    } while (personaje1 !== "perro" && personaje1 !== "gato");

});
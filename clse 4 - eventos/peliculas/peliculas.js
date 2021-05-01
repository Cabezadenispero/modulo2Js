const ocultaClase = function(claseAOcultar) {
    const listaPeliculas = document.querySelectorAll (claseAOcultar);
    for(let contador = 0; contador < listaPeliculas.length; contador++){
        //listaPeliculas[contador].hidden = true;
        listaPeliculas[contador].style ="display:none"
    }
}

const muestraClase = function(claseAOcultar) {
    const listaPeliculas = document.querySelectorAll (claseAOcultar);
    for(let contador = 0; contador < listaPeliculas.length; contador++){
        listaPeliculas[contador].style = "display:inline";
    }
}

/**
 * @param {string} claseAOcultar - una descripcion
 * @param {boolean} muestraUOculta - una descripcion
 */
const muestraUOcultaPeliculas = function(claseAOcultar, muestraUOculta) {
    const listaPeliculas = document.querySelectorAll (claseAOcultar);
    for(let contador = 0; contador < listaPeliculas.length; contador++){
        listaPeliculas[contador].hidden = muestraUOculta;
    }
}


const botonComedia = document.getElementById("boton-Comedia");
const botonTerror = document.getElementById("boton-Terror");
const botonDrama = document.getElementById("boton-Drama");
const botonMostrarTodas = document.getElementById("boton-MostrarTodas");


botonComedia.addEventListener("click", function() {
    muestraClase(".comedia")
    ocultaClase(".terror")
    ocultaClase(".drama")
})

botonTerror.addEventListener("click", function() {
    muestraClase(".terror")
    ocultaClase(".comedia")
    ocultaClase(".drama")
})

botonDrama.addEventListener("click", function() {
    muestraClase(".drama")
    ocultaClase(".comedia")
    ocultaClase(".terror")
})

botonMostrarTodas.addEventListener("click", function() {
    muestraClase(".terror")
    muestraClase(".comedia")
    muestraClase(".drama")
})

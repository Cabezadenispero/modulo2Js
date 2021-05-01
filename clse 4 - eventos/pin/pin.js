const botonReset= document.getElementById ("reset")

let esCorrecto = function(){
    botonCorrecto.style.backgroundColor = "green";
    msgRespuesta.innerText="Acertaste"
}
botonCorrecto.addEventListener('click', esCorrecto)fun
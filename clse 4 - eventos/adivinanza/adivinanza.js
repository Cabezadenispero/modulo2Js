const botonCorrecto = document.getElementById ('boton-correcto')
const msgRespuesta = document.getElementById ('msg-respuesta')
const botonWrong= document.querySelector('#wrong')
const botonWrong2= document.querySelector('#wrong2')

let esCorrecto = function(){
    botonCorrecto.style.backgroundColor = "green";
    msgRespuesta.innerText="Acertaste"
}
botonCorrecto.addEventListener('click', esCorrecto)

let esIncorrecto = function(){
    botonWrong.style.backgroundColor = "red";
    msgRespuesta.innerText="Muy mal";
    botonCorrecto.style.backgroundColor="green";
    
}
botonWrong.addEventListener('click', esIncorrecto)

let esIncorrecto2 = function(){
    botonWrong2.style.backgroundColor = "red";
    msgRespuesta.innerText="Muy mal";
    botonCorrecto.style.backgroundColor="green";
}
botonWrong2.addEventListener('click', esIncorrecto2)


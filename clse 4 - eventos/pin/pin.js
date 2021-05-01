const nZero= document.querySelector("#zero")
const nUno= document.querySelector("#uno")
const nDos= document.querySelector("#dos")
const nTres= document.querySelector("#tres")
const nCuatro= document.querySelector("#cuatro")
const nCinco= document.querySelector("#cinco")
const nSeis= document.querySelector("#seis")
const nSiete= document.querySelector("#siete")
const nOcho= document.querySelector("#ocho")
const nNueve= document.querySelector("#nueve")

const cajaNro= document.querySelector("#caja-numero")
const botonReset= document.querySelector(".boton-reset")

//funciones para imprimir numeros  

const aprietaZero = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "0"
    }
}

const aprietaUno = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "1"
    }
}

const aprietaDos = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "2"
    }
}

const aprietaTres = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "3"
    }
}

const aprietaCuatro = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "4"
    }
}

const aprietaCinco = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "5"
    }
}

const aprietaSeis = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "6"
    }
}

const aprietaSiete = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "7"
    }
}

const aprietaOcho = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "8"
    }
}

const aprietaNueve = function(){
    if (cajaNro.innerText.length <6){
        cajaNro.innerText += "9"
    }
}

const aprietaReset = function() {
    cajaNro.innerText="";
    
}

nZero.addEventListener('click', aprietaZero)
nUno.addEventListener('click', aprietaUno)
nDos.addEventListener('click', aprietaDos)
nTres.addEventListener('click', aprietaTres)
nCuatro.addEventListener('click', aprietaCuatro)
nCinco.addEventListener('click', aprietaCinco)
nSeis.addEventListener('click', aprietaSeis)
nSiete.addEventListener('click', aprietaSiete)
nOcho.addEventListener('click', aprietaOcho)
nNueve.addEventListener('click', aprietaNueve)
botonReset.addEventListener('click', aprietaReset)

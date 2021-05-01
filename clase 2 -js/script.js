/*Definí una función contarPalabras que reciba 
como argumento un string str y devuelva la cantidad 
de palabras que posee

 contarPalabras('javascript')
1
 contarPalabras('ada lovelace')
2
 contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')
14
var textoTroceado = texto.split (" ");
	//Contamos todos los trozos de cadenas que existen
	var numeroPalabras = textoTroceado.length;
	//Mostramos el número de palabras
	alert(numeroPalabras);
*/

/*

let texto1="javascript"
let texto2="ada lovelace"
let texto3="si debuggear es el proceso de remover bugs, pogramar es el proceso de agregarlos"


function contarPalabras (frase) {
        frase.split(" ")
}


contarPalabras(texto3)

*/

/*
ejercicio 5 - contador de palabras 
function contarPalabras(frase,separador) {
    return(frase.split(separador))
   
  }
 
 let texto1=("la concha del mono")
 let separador=(" ")
 
 contarPalabras (texto1, separador)
*/
/*
function burlarse(frase) {
    return frase.replaceAll(`a`,`i`).replaceAll(`e`, `i`).replaceAll(`o`,`i`).replaceAll(`u`,`i`)
}
let insulto=("la concha del mono")

burlarse(insulto)*/
/*

const frac1=Number("1/2")


console.log(eval(frac1))







function mayorA1(value) {
    Const numeros = value.split(“/“)
    Const decimal = Number(numeros[0])/Number(numeros[1])
    if(decimal < 1) {
        console.log("Es mayor que uno");
    } 
    else {
        console.log("Es menor que uno");
    }
}

mayorA1 (frac1)

*/
/*
function capitalizar(frase) {
    return frase.charAt(0).toUpperCase() + frase.slice(1);
    } 

let palabra=("lovelace")

capitaizar(palabra)*/


function esFraccionMayorAUno (fraccion) {
    let numerador=parseInt(fraccion[0]);
    let denominador=parseInt(fraccion[2]);
    let resultado=numerador/denominador;
    return resultado > 1 
}


function esFraccionMayorAUno (fraccion) {
    let numerador=parseInt(fraccion.charAt(0));
    let denominador=parseInt(fraccion.charAt(2));
    let resultado=numerador/denominador;
    return resultado > 1 
}


function esFraccionMayorAUno (fraccion) {
    let partido=fraccion.split("/");
    console.log(partido)
    let numerador=parseInt(partido[0]);
    let denominador=parseInt(partido[1]);
    let resultado=numerador/denominador;
    return resultado > 1 
}



function obtenerPrimeraOracion(str) {
    let primeraParte=oración.split(".");
    return primeraParte[0]  
}



function esAnioNuevo(fecha, argumento) {
    let fecha=(`01/01/`)
    return argumento.includes(fecha)  
}

function aHackerSpeak(str) {
    let cosoi=str.replace(/i/g,`1`)
    let cosoa=cosoi.replace(/a/g,`4`)
    let cosoe=cosoa.replace(/e/g,`3`)
    let cosoo=cosoe.replace(/o/g,`0`)
    let cosos=cosoo.replace(/s/g,`5`)
    return cosos     
}
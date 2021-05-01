
const formatBox = document.querySelector('.box')
formatBox.style=`width:500px; border: 2px solid black; border-radius:10px; box-shadow: 7px 6px 5px 0px rgba(0,0,0,0.75); font-family: 'Shadows Into Light', cursive;` 

const americaC = document.getElementsByClassName ('america')
const africaC = document.getElementsByClassName ('africa')
const asiaC= document.getElementsByClassName ('asia')
const europaC = document.getElementsByClassName ('europa')
const oceaniaC = document.getElementsByClassName ('oceania')


const continentQuestion = prompt("ingrese un continente: America, Oceania, Asia, Europa o Africa ")

const paisesColor=(a) => {
    if (a == "America") {
        for (let i=0; i<americaC.length; i++){
            americaC[i].style.color="red";
            americaC[i].style.fontWeight="bold";
        }
    } 
    else if (a == "Europa") {
        for (let i=0; i<europaC.length; i++){
            europaC[i].style.color="red";
            europaC[i].style.fontWeight="bold";
        }
    } 
    else if (a == "Asia") {
        for (let i=0; i<asiaC.length; i++){
            asiaC[i].style.color="red";
            asiaC[i].style.fontWeight="bold";
        }
    } 
    else if (a == "Africa") {
        for (let i=0; i<africaC.length; i++){
            africaC[i].style.color="red";
            africaC[i].style.fontWeight="bold";
        }
    } 
    else if (a == "Oceania") {
        for (let i=0; i<oceaniaC.length; i++){
            oceaniaC[i].style.color="red";
            oceaniaC[i].style.fontWeight="bold";
        }
    }
}
paisesColor(continentQuestion);
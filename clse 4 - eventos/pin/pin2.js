const botones = document.getElementsByTagName("button");
const cajaNro= document.querySelector("#caja-numero")

for (let contador=0; contador<botones.length; contador++){
    botones[contador].addEventListener(`click`,function(evento){
        const boton=evento.target;
        if (boton.innerText == "Reset") {
            cajaNro.innerText = "" 
        } 
        else if (boton.innerText == "Borrar"){
            let cajaPin= cajaNro.innerText 
            cajaNro.innerText = cajaPin.slice(0,cajaPin.length-1)
        }       
        else if (cajaNro.innerText.length <6){
            cajaNro.innerText += boton.innerText
        }
        
    })
}


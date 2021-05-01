const bodyCentrado = document.getElementById ('body-centrado')
const btnRojo = document.getElementById ('btn-rojo')
const btnVerde = document.getElementById ('btn-verde')
const btnCoral = document.getElementById ('btn-coral')
const btnAzul = document.getElementById ('btn-azul')
const btnNaranja = document.getElementById ('btn-naranja')
const btnGris = document.getElementById ('btn-gris')
const cajaPaleta = document.getElementById('caja-paleta')
const buttonsBox = document.getElementById (`buttons-box`)
const tituloPaleta = document.querySelector('p')

cajaPaleta.style = `height: 400px; width:400px; margin: 20px; border: solid 2px black; border-radius:20px;`
bodyCentrado.style = `display:flex; flex-direction: column; align-items: center; justify-content: center;`
buttonsBox.style = `display:flex; flex-direction: rox; align-items: center; justify-content: center;`
tituloPaleta.style = `font-size: 20px;`

let aplicaEstiloComun = function(color) {
    return `height: 50px; width: 90px; margin:10px; border-radius: 10px; background-color: ${color}; outline: none; border: transparent;`
}

btnRojo.style = aplicaEstiloComun("#ff5c77");
btnVerde.style = aplicaEstiloComun("#4dd091");
btnCoral.style = aplicaEstiloComun("#ff6f68");
btnAzul.style = aplicaEstiloComun("#0065a2");
btnNaranja.style = aplicaEstiloComun("#ffa23a");
btnGris.style = aplicaEstiloComun("#74737a");


let cambiaElColor = function(color){
   cajaPaleta.style.backgroundColor = color;
}

btnRojo.addEventListener('click', function(){ cambiaElColor("#ff5c77")})
btnVerde.addEventListener('click', function(){ cambiaElColor("#4dd091")}) 
btnCoral.addEventListener('click', function(){ cambiaElColor("#ff6f68")})
btnNaranja.addEventListener('click', function(){ cambiaElColor("#ffa23a")})
btnGris.addEventListener('click', function(){ cambiaElColor("#74737a")})
btnAzul.addEventListener('click', function(){ cambiaElColor("#0065a2")})
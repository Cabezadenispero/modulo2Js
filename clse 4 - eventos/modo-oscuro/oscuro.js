const bodyCentrado = document.getElementById (`body-centrado`)

const pSize = document.querySelector (`p`)

const buttonDarkMode = document.querySelector (`button`)

const sunIcon = document.getElementById (`sun`)
const moonIcon = document.getElementById (`moon`)
moonIcon.style = `display: none;`

const h1Text = document.getElementById (`h1-text`) 

/* cuando hago click en el botón compruebo en que modo estoy
y si estoy en modo claro paso a modo oscuro y viceversa
necesito una variable para guardar en que estado estoy y 
es la que voy a guardar en el if*/
function changeDark () {
    bodyCentrado.style.backgroundColor = "black";
    pSize.style.color = "white";
    h1Text.innerHTML= "Modo Oscuro";
    h1Text.color= "white";
    sunIcon.style= 'display: none';
    moonIcon.style= "display: inline";   
}

function changeInicio () {
    bodyCentrado.style.backgroundColor = "white";
    pSize.style.color = "black";
    h1Text.innerHTML= "";
    sunIcon.style= 'display: inline';
    moonIcon.style= "display: none";  
}

let modoPantalla = "claro" 

buttonDarkMode.addEventListener (`click`, function() {
    console.log("aprete botón")
    console.log(modoPantalla)
    if (modoPantalla == "oscuro") {
        // cambia a modo claro
        changeInicio()
        modoPantalla = "claro"
    }
    else {
        // cambia a modo oscuro
        changeDark()
        modoPantalla = "oscuro"
    }
})

// "oscuro" "claro"
// let estoyEnModoOscuro = false 


// buttonDarkMode.addEventListener (`click`, function() {
//     console.log("aprete botón")
//     // console.log(modoPantalla)
//     if (estoyEnModoOscuro) {
//         // cambia a modo claro
//         changeInicio()
//         estoyEnModoOscuro = false
//     }
//     else {
//         // cambia a modo oscuro
//         changeDark()
//         estoyEnModoOscuro = true
//     }
// })

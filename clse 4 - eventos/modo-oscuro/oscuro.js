const bodyCentrado = document.getElementById (`body-centrado`)
bodyCentrado.style= `display:flex; flex-direction: column; justify-content: center; align-items: center;`

const pSize = document.querySelector (`p`)
pSize.style= `width: 900px; font-size: 30px; text-align: center;`

const buttonDarkMode = document.querySelector (`button`)
buttonDarkMode.style= `height: 80px; width:200px; outline: none; border-radius: 35px;`

const sun = document.getElementsByClassName (`fa-sun`)
const moon = document.getElementsByClassName (`fa-moon`)
moon.style = `display: none;`

const h1Text = document.getElementById (`h1-text`) 


/* cuando hago click en el botón compruebo en que modo estoy
y si estoy en modo claro paso a modo oscuro y viceversa
necesito una variable para guardar en que estado estoy y 
es la que voy a guardar en el if*/


function changeDark () {
    bodyCentrado.style.backgroundColor = "grey";
    pSize.style.color = "blue";
    h1Text.innerHTML= "Modo Oscuro";
    sun.style= 'display: none';
    console.log (changeDark)    
}

buttonDarkMode.addEventListener (`click`, changeDark)


/*function revealSection() {
    if (hiddenSection.classList.contains("reveal")) {
        ;
    } else {
        hiddenSection.classList.add("reveal");
    }
}
Event listener 
revealButton.addEventListener("click", revealSection, false);*/
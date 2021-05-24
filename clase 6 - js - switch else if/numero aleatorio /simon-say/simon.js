const printColorPlace = document.getElementById ('simon-box')
const playSimon = document.getElementById ('play-simon')

const simonColor = ["rojo", "azul", "verde", "amarillo"] 


const getPrintColor =()=>
{   
    for (i = 0; i < 5; i++) {
        let getPositionColor = Math.floor(Math.random()*3);
        let bringColorToChart = simonColor[getPositionColor];
        console.log(bringColorToChart)
        printColorPlace.innerHTML = bringColorToChart
    }
}

playSimon.addEventListener('click', getPrintColor);

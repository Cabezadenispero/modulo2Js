const temperatura = Number (prompt("ingrese la temperatura del día"));
const tempNumber= document.querySelector('#tempBack');
let colorFondo = ""

const tempBackground = (temperatura) =>{
    if(temperatura<=0){
        colorFondo = "#0000ff";        
    }
    else if(temperatura>=0 && temperatura<=15){
        colorFondo = "#41ffcf";        
    }    
    else if(temperatura>=16 && temperatura<=25){
        colorFondo = "#00ff7f";        
    }
    else if(temperatura>=26 && temperatura<=30){
        colorFondo = "#edff21";        
    }
    else if(temperatura>=31 && temperatura<=35){
        colorFondo = "#f28400";        
    }
    else if(temperatura>=36){
        colorFondo = "#ff0000";        
    } else {
        console.log ("Todomal")
    }
    console.log(temperatura)

    tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
    tempNumber.style=`background-color: ${colorFondo}`;

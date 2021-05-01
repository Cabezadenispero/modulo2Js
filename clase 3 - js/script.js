

const color1 = Number(prompt("ingrese un numero"));
const color2 = Number(prompt("ingrese un numero"));
const color3 = Number(prompt("ingrese otro numero"));
const colorNew = `rgb(${color1}, ${color2}, ${color3})`;


const changeColor = document.getElementById('color');
changeColor.style=`background-color:${colorNew}`




----------------------
Tamaño de la imagen 

const img = prompt("Ingrese el tamaño de la imagen chica, mediana o grande");
const tamanioImg= document.querySelector('#size-img');
let size = ""

const sizeSelector = (img)=>{
    if(img=='chica'){
        size='200px;'
        tamanioImg.style=`width:${size}`
    }
    else if (img=='mediana'){
        size='500px;'
        tamanioImg.style=`width:${size}`
    }
    else if (img=='grande'){
        size='800px;'
        tamanioImg.style=`width:${size}`
    }
    console.log(size)
}
sizeSelector(img)

Temperatura 


const temperatura = Number (prompt("ingrese la temperatura del día"));
const tempNumber= document.querySelector('#tempBack');

const tempBackground = (temperatura) =>{
    if(temperatura<=0){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #0000ff`;        
    }
    else if(temperatura>=0 && temperatura<=15){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #41ffcf`;        
    }    
    else if(temperatura>=16 && temperatura<=25){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #00ff7f`;        
    }
    else if(temperatura>=26 && temperatura<=30){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #edff21`;        
    }
    else if(temperatura>=31 && temperatura<=35){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #f28400`;        
    }
    else if(temperatura>=36){
        tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
        tempNumber.style=`background-color: #ff0000`;        
    } else {
        console.log ("Todomal")
    }
    console.log(temperatura)
}

tempBackground(temperatura)

--- Barra de progreso 

        const temperatura = Number (prompt("ingrese la temperatura del día"));
        const tempNumber= document.querySelector('#tempBack');
        
        const tempBackground = (temperatura) =>{
            if(temperatura<=0){
                tempNumber.innerHTML = `Temperatura actual: ${temperatura}°`;
                tempNumber.style=`background-color: #0000ff`;        
            }


const boxContenedora = document.querySelector('.box1')
console.log (boxContenedora)

boxContenedora.style=`background-color:#9b9b9b; width: 110px; height: 40px; padding: 5px; border-radius:35px;`



const progreso = Number (prompt("ingrese progreso de 0 a 100"));
const boxInterior = document.querySelector('.box2')


boxInterior.style= `width:${progreso}px; height: 30px; background-color: red;`;
boxInterior.innerHTML;  
console.log (boxInterior)      



let millas = document.querySelector (`#millas`);
let km = document.querySelector (`#km`);

const imprimirMillas = (event) => {
    console.log(event.target.value)
}

millas.addEventListener (`input`, imprimirMillas, false);


let kilometros=document.getElementById('kilometros'); 
let millas=document.getElementById('millas'); 
const calculo=(event)=>{ if(event.target.name==='kilometros') { 
    millas.value = kilometros.value * 1.61; } 
    else if (event.target.name==='millas') 
    { kilometros.value = millas.value * 0.62; } 
}; 

kilometros.addEventListener('keyup',calculo); 
millas.addEventListener('keyup',calculo); 




/*let kilometros=prompt(`Ingresá una cantidad de kilómetros`);
const millas=0.6213710;
const resultado=(kilometros*millas)
alert(`El resultado de la conversión de ${kilometros} kilometros a millas es: ${resultado}`) */


    
    
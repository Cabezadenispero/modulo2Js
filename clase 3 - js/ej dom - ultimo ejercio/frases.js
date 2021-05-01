

const keyWord = prompt("Diganos una palabra")
const arrayQuotes = document.getElementsByClassName ('quote')
let cuantosQuotesHay = arrayQuotes.length;


for(let contador = 0; contador < cuantosQuotesHay; contador++) { 
    console.log(`El contador es: ${contador}`)
    console.log(arrayQuotes[contador].innerHTML)
    let contenidoDelLi = arrayQuotes[contador].innerHTML
    if (contenidoDelLi.includes(keyWord)) {
        console.log("Este Li continene lo que busco, ale pintalo")
    }
}



const palabra = prompt("ingrese su comida");
//Guardo el texto donde aparece
const text = document.querySelectorAll("#text li");

for(let i = 0; i < text.length; i++){
const textHTML = text[i].innerHTML;
if (textHTML.includes(palabra)){
text[i].style.backgroundColor = "red";
}
} 









/*for(let i = 1; i < nombre.length; i++) { 
    console.log(nombre[i]); } 
    const alumnos = [
        "Agostina", 
        "Valentina",
        "Mailen",
        "Ludmila"
    ];
    const alumnos2 = [
        "Federico", 
        "Juan", 
        "Santiago"]; 
    const enviarInvitacionesActoFinal = 
    (listaAlumnos) => { for(let i = 0; i 
        < listaAlumnos.length; i++) 
        { console.log(`Enviar email a 
        ${listaAlumnos[i]}`); } } 
        enviarInvitacionesActoFinal(alumnos);
         enviarInvitacionesActoFinal(alumnos2); */
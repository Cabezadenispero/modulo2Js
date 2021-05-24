// Ejercicio 2 Adivinanzas

const guessBtn= document.getElementById ('guess-btn');
const guessCards = document.getElementsByClassName ('guess');
const getAnswerInputChoice = document.getElementsByClassName('answer-Choice');
let responseBox=document.getElementById('answer');


const getGuessGame =()=>
{
    let getGuessCard = Math.floor(Math.random()*3);
    let getGuessChoice = guessCards[getGuessCard];
    getGuessChoice.style = "display: flex;";
}

guessBtn.addEventListener('click', getGuessGame);

const answer1 = document.querySelector('#answer-1')
const answer2 = document.querySelector('#answer-2')
const answer3 = document.querySelector('#answer-3')
const answer4 = document.querySelector('#answer-4')

const getResponse =()=>
{
    if(answer1.value==="correct"){
        responseBox.innerHTML="Correcto!!!"
    }
    else if (answer2.value==="correct"){
        responseBox.innerHTML="Correcto!!!"
    }
    else if (answer3.value==="correct"){
        responseBox.innerHTML="Correcto!!!"
    }
    else if (answer4.value==="correct"){
        responseBox.innerHTML="Correcto!!!"
    }
    else {
        responseBox.innerHTML="Fallaste!!!"
    }
    
    console.log(getResponse)
}

answer1.addEventListener('input',getResponse);
answer2.addEventListener('input',getResponse);
answer3.addEventListener('input',getResponse);
answer4.addEventListener('input',getResponse);


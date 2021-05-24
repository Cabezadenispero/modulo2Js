const humanChoice = document.querySelector ('#human-choice');
const pcChoice = document.querySelector ('#pc-choice');
const pcChoiceItems = ["piedra", "papel","tijera"];
const answerBox = document.querySelector('#answer-box')
const winnerBox = document.querySelector ('#winner-box');
const btnReset = document.querySelector ('#btn-reset');


const getMove =()=>
{
    const getHumanChoice = humanChoice.value
    let nroAleatorio = Math.floor(Math.random()*2);
    let getPcChoice = pcChoiceItems[nroAleatorio];
    answerBox.innerHTML = getPcChoice;
    console.log(getHumanChoice)
    console.log (getPcChoice)
    
    if      (getHumanChoice == "piedra" && getPcChoice == "papel"){
        winnerBox.innerHTML= "Gana Humano!"
    }
    else if (getHumanChoice == "papel" && getPcChoice == "piedra"){
        winnerBox.innerHTML= "Gana Humano!"
    }
    else if (getHumanChoice == "tijera" && getPcChoice == "papel"){
        winnerBox.innerHTML= "Gana Humano!"
    }
    else if (getHumanChoice == "papel" && getPcChoice == "tijera"){
        winnerBox.innerHTML= "Gana pc!"
    }
    else if (getHumanChoice == "tijera" && getPcChoice == "piedra"){
        winnerBox.innerHTML= "Gana Pc!"
    }
    else if (getHumanChoice == "piedra" && getPcChoice == "papel"){
        winnerBox.innerHTML= "Gana Pc!"
    }
    else if (getHumanChoice == getPcChoice ){
        winnerBox.innerHTML= "Empate"
    }
}

const tryAgain =()=> 
{
    winnerBox.innerHTML= ""
}
humanChoice.addEventListener('input', getMove);
btnReset.addEventListener('click',tryAgain);


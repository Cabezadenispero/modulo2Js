// Ejercicio 2 Adivinanzas

const guessBtn= document.getElementById ('guess-btn');
const guessCards = document.getElementsByClassName ('guess');
const getAnswerInputChoice = document.getElementsByClassName('answer-Choice');

const answerGuess1= document.getElementById ('answer-box-1');
const answerGuess2= document.getElementById ('answer-box-2');
const answerGuess3= document.getElementById ('answer-box-3');
const answerGuess4= document.getElementById ('answer-box-4');
const answer1 = document.getElementById ('answer-1');
const answer2 = document.getElementById ('answer-2');
const answer3 = document.getElementById ('answer-3');
const answer4 = document.getElementById ('answer-4');

const getGuessGame =()=>
{
    let getGuessCard = Math.floor(Math.random()*3);
    let getGuessChoice = guessCards[getGuessCard];
    getGuessChoice.style = "display: flex;"     
}

guessBtn.addEventListener('click', getGuessGame);









/*
const getAnswerCorrect1 =()=>
    {   
        const answerChoiceValue = answer1.value
        console.log(answerChoiceValue)
        if (answerChoiceValue=="correct"){
            answerGuess1.innerHTML="Acertaste"
        }
        else {
            answerGuess1.innerHTML="Error!"
        }
    }
answer1.addEventListener('input',getAnswerCorrect1);


const getAnswerCorrect2 =()=>
    {   
        const answerChoiceValue = answer2.value
        console.log(answerChoiceValue)
        if (answerChoiceValue=="correct"){
            answerGuess2.innerHTML="Acertaste"
        }
        else {
            answerGuess2.innerHTML="Error!"
        }
    }
answer2.addEventListener('input', getAnswerCorrect2)

const getAnswerCorrect3 =()=>
    {   
        const answerChoiceValue = answer3.value
        console.log(answerChoiceValue)
        if (answerChoiceValue=="correct"){
            answerGuess3.innerHTML="Acertaste"
        }
        else {
            answerGuess3.innerHTML="Error!"
        }
    }
answer3.addEventListener('input', getAnswerCorrect3)

const getAnswerCorrect4 =()=>
    {   
        let answerChoiceValue = answer4.value
        console.log(answerChoiceValue)
        if (answerChoiceValue=="wrong"){
            answerGuess4.innerHTML="Acertaste"
        }
        else {
            answerGuess4.innerHTML="Error!"
        }
    }
answer4.addEventListener('input', getAnswerCorrect4)

*/
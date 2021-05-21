const getNumber = document.getElementById('number')
const btnNumber = document.getElementById('btn-number')

const compareOddOrEven=()=>
{
    const getInputValue= getNumber.value
    if ((getInputValue%2)=== 0){
        alert('es par')
        console.log (getNumber)
    } else {
        alert('es impar')
        
    }
}

btnNumber.addEventListener('click',compareOddOrEven)

//------------ ejercicio Banco --------------------

const availableMoney = document.getElementById('saved-money')  
const extractMoney = document.getElementById('extract-money')  
const btnBank = document.getElementById('btn-bank')  
const answerBox = document.getElementById('answer-box')  

const getAnswer=()=>
{
    const opBank1 = availableMoney.value;
    const opBank2 = extractMoney.value;
    const opAnswer = (opBank1-opBank2);
    //answerBox.innerHTML= opAnswer;
    if (opAnswer>0){
        answerBox.innerHTML= `Usted aún dispone de $${opAnswer} en su cuenta.`  
    }
    else {
        answerBox.innerHTML= 'Usted no dispone de suficiente dinero para realizar la extracción'
        answerBox.style= "border: dashed 2px rgb(224, 52, 52);"
    }
    console.log(getAnswer)
}

btnBank.addEventListener(`mouseover`,getAnswer)
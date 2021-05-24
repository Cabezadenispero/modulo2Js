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

extractMoney.addEventListener(`input`,getAnswer)

/* ejercicio 3 días del mes */

const getMonthName = document.getElementById('month-name')
const daysBoxAnswer = document.getElementById('month-box')  

const getAnswerDays =()=>
{
    const getMonthValue = getMonthName.value
    console.log (getMonthValue)
    if (getMonthValue == "30"){
        daysBoxAnswer.innerHTML= "el mes elegido tiene 30 días"
    }
    else if(getMonthValue == "31"){
        daysBoxAnswer.innerHTML= "este mes tiene 31 días"
    }
    else if(getMonthValue == "28"){
        daysBoxAnswer.innerHTML= "28 días, el mes más cortito!"
    }
}

getMonthName.addEventListener('input', getAnswerDays);


/* ejercicio 4 a que generación perteneces */

const getBirthYear = document.getElementById('birth-year')
const generationBoxAnswer = document.getElementById('generation-box')  

const getGenerationName =()=>
{
    const getBirthYearValue = getBirthYear.value
    console.log (getBirthYearValue)
    if (getBirthYearValue >= 1945 && getBirthYearValue<=1964){
        generationBoxAnswer.innerHTML= "¡¡ Baby Boomer !!"
    }
    else if(getBirthYearValue >= 1965 && getBirthYearValue<=1981){
        generationBoxAnswer.innerHTML= "¡¡ Generación X !!"
    }
    else if(getBirthYearValue >= 1982 && getBirthYearValue<=1994){
        generationBoxAnswer.innerHTML= "¡¡ Millennials !!"
    }
    else if(getBirthYearValue >= 1995 && getBirthYearValue<=2022){
        generationBoxAnswer.innerHTML= "¡¡ Centennials !!"
    }
    else if(getBirthYearValue <=1944){
        generationBoxAnswer.innerHTML= "¡¡ No sabemos en donde ponerlo !!"
    }
}

getBirthYear.addEventListener('input', getGenerationName);

/* ejercicio 5 Heladeria II */

const iceCreamOption = document.getElementById('ice-cream_option')
const iceCreamAnswer = document.getElementById('ice-cream_answer')  

const getYourIceCream =()=>
{
    const getYourIceCreamValue = iceCreamOption.value
    if (getYourIceCreamValue == 2){
        let flavours = prompt('elija dos sabores');
        iceCreamAnswer.innerHTML= `se lleva 1/4kg de ${flavours}` 
        console.log(getYourIceCreamValue)
    }
    else if(getYourIceCreamValue == 3){
        let flavours = prompt('elija 3 sabores');
        iceCreamAnswer.innerHTML= `se lleva 1/2kg de ${flavours}` 
        console.log(getYourIceCreamValue)
    }
    else if(getYourIceCreamValue == 4){
        let flavours = prompt('elija 4 sabores');
        iceCreamAnswer.innerHTML= `se lleva 1/3kg de ${flavours}` 
        console.log(getYourIceCreamValue)
    }
    else if(getYourIceCreamValue == 5){
        let flavours = prompt('elija 5 sabores');
        iceCreamAnswer.innerHTML= `se lleva 1 kg de ${flavours}` 
        console.log(getYourIceCreamValue)
    }
}

iceCreamOption.addEventListener('input', getYourIceCream);

/* ejercicio 6 aprobado */
const noteTest = document.getElementById('note-test')
const testRestult = document.getElementById('test-result')  

const getYouDo =()=>
{
    const noteTestValue = noteTest.value
    if (noteTestValue >= 7){
        testRestult.innerHTML= "¡Aprobado!" 
    }
    else if(noteTestValue > 4 && noteTestValue < 7){
        testRestult.innerHTML= "Te toca recuperar" 
        console.log(noteTestValue)
    }
    else if(noteTestValue <= 4){
        testRestult.innerHTML= "Aplazado" 
        console.log(noteTestValue)
    }
}

noteTest.addEventListener('input', getYouDo);


/* ejercicio 7 grupo de letras */

const getLetter = document.getElementById('letter')
const answerLetterBox = document.getElementById('letter-answer')  

const getLetterGroup =()=>
{
    const getLetterValue = getLetter.value
    const getLetterValueUpper = getLetterValue.toUpperCase()
    const group1 = "ABCDE"
    const group2 = "FGHIJK"
    const group3 = "LMNOPQ"
    const group4 = "RSTUVW"
    const group5 = "XYZ"

    console.log(getLetterValueUpper)
    if (group1.includes(getLetterValueUpper) ){
        answerLetterBox.innerHTML= "tu letra está en el grupo A!" 
    }
    else if(group2.includes(getLetterValueUpper) ){
        answerLetterBox.innerHTML= "tu letra está en el grupo B!" 
    }
    else if(group3.includes(getLetterValueUpper) ){
        answerLetterBox.innerHTML= "tu letra está en el grupo C!" 
    }
    else if(group4.includes(getLetterValueUpper) ){
        answerLetterBox.innerHTML= "tu letra está en el grupo D!" 
    }
    else if(group5.includes(getLetterValueUpper) ){
        answerLetterBox.innerHTML= "tu letra está en el grupo E!" 
    }
}

getLetter.addEventListener('input', getLetterGroup);

// numero aleatorio 

const colorChoice=document.querySelector('#color');
const oddEvenChoice=document.querySelector('#odd-even');
const lowHighChoice=document.querySelector('#low-high');
const dozenChoice=document.querySelector('#dozen');
const betBtn= document.querySelector('#bet');
const betNumberBox= document.querySelector('#bet-number');
const betCompare= document.querySelector('#bet-compare');
let humanChoice =[];

const choice=document.getElementsByTagName('input');

const betHumanChoice =()=>
{   
    console.log('hola')
    humanChoice.push(colorChoice.value);
            console.log(humanChoice);
    humanChoice.push(oddEvenChoice.value);
            console.log(humanChoice);  
    humanChoice.push(lowHighChoice.value);
            console.log(humanChoice);
    humanChoice.push(dozenChoice.value);
            console.log(humanChoice); 
    betNumberBox.innerHTML=humanChoice;    
}
betBtn.addEventListener('click', betHumanChoice);

let colorPc= ["Rojo","Negro"];
let oddEvenPc= ["Impar","Par"];
let lowHighPc= ["Bajo","Alto"];
let dozenPc= ["Primera","Segunda","Tercera"];
let betPc= []

const betPcChoice =()=> {
    let betRandom = Math.round(Math.random()*1);
    betPc.push(colorPc[betRandom]);
    let betRandom1 = Math.round(Math.random()*1);
    betPc.push(oddEvenPc[betRandom1]);
    let betRandom2 = Math.round(Math.random()*1);
    betPc.push(lowHighPc[betRandom2]);
    let betRandom3 = Math.round(Math.random()*2);
    betPc.push(dozenPc[betRandom3]);
    console.log (betPc)
    betCompare.innerHTML=betPc;    
}
betBtn.addEventListener("click",betPcChoice)

const compareBtn= document.querySelector('#compare-button');
const winnerBox= document.querySelector('#who-won');
const betCompareColor= document.querySelector('#bet-compare-color');
const betCompareOdd= document.querySelector('#bet-compare-od');
const betCompareLow= document.querySelector('#bet-compare-low');
const betCompareDozen= document.querySelector('#bet-compare-dozen');

const betCompareGame=()=>
{
    if(betPc[0]==humanChoice[0]){
        betCompareColor.innerHTML="Gana!"
    }
    if(betPc[1]==humanChoice[1]){
        betCompareOdd.innerHTML="Gana!"
    }
    if(betPc[2]==humanChoice[2]){
        betCompareLow.innerHTML="Gana!"
    }
    if(betPc[3]==humanChoice[3]){
        betCompareDozen.innerHTML="Gana!"
    }
    if(betPc==humanChoice){
        winnerBox.innerHTML = "Se lleva todo!"
    }
    else {
        winnerBox.innerHTML = "Gana la banca!"
    }
}
compareBtn.addEventListener('click',betCompareGame)
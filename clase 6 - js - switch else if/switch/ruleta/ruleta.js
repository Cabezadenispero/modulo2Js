const playRuleta= document.querySelector('#ruleta')
const colorChoice=document.querySelector('#color');
const oddEvenChoice=document.querySelector('#odd-even');
const lowHighChoice=document.querySelector('#low-high');
const dozenChoice=document.querySelector('#dozen');
const betBtn= document.querySelector('#bet');
const betNumberBox= document.querySelector('#bet-number');
const betCompare= document.querySelector('#bet-compare');
let humanChoice =[];
let colorPc= ["Rojo","Negro"];
let oddEvenPc= ["Impar","Par"];
let lowHighPc= ["Bajo","Alto"];
let dozenPc= ["Primera","Segunda","Tercera"];
let betPc= []
const choice=document.getElementsByTagName('input');

/*const betHumanChoice =()=>
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
betBtn.addEventListener('click', betHumanChoice);*/


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

const compareBtn= document.querySelector('#bet');
const winnerBox= document.querySelector('#who-won');
const betCompareColor= document.querySelector('#bet-compare-color');
const betCompareOdd= document.querySelector('#bet-compare-od');
const betCompareLow= document.querySelector('#bet-compare-low');
const betCompareDozen= document.querySelector('#bet-compare-dozen');

/*const betCompareGame=()=>
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
compareBtn.addEventListener('click',betCompareGame)*/

const playRuletaBet =(event)=>{
    const selectChoice = event.target.value;

        switch (selectChoice){
            case "color_option":
                humanChoice="rojo";
                console.log(humanChoice);
            break
    
            /*case "black":
            negro.style=`background-color:#FA5DC4; color: white;`;
            colorBet="negro";
            break
    
            case "even":
            par.style=`background-color:#FA5DC4; color: white;`;
            parImpar="par";
            break
    
            case "odd":
            impar.style=`background-color:#FA5DC4; color: white;`;
            parImpar="impar";
            break
    
            case "high":
            alta.style=`background-color:#FA5DC4; color: white;`;
            altaBaja1="alta";
            break
        
            case "low":
            baja.style=`background-color:#FA5DC4; color: white;`;
            altaBaja1="baja";
            break
    
            case "firstDozen":
            primerDocena.style=`background-color:#FA5DC4; color: white;`;
            docenas="primer docena";
            break
            
            case "secondDozen":
            segundaDocena.style=`background-color:#FA5DC4; color: white;`;
            docenas="segunda docena";
            break
    
            case "thirdDozen":
            tercerDocena.style=`background-color:#FA5DC4; color: white;`;
            docenas="tercer docena";
            break*/
            
        }
    }

colorChoice.addEventListener("click", playRuletaBet);
oddEvenChoice.addEventListener("click", playRuletaBet);
lowHighChoice.addEventListener("onChange", playRuletaBet);
dozenChoice.addEventListener("onChange", playRuletaBet);




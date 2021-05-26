const startOrder = document.querySelector ('.choice-start')
const pickIngredients = document.getElementsByClassName ('choice')
const choice1 = document.querySelector('#choice-1')
const choice2 = document.querySelector('#choice-2')
const choice3 = document.querySelector('#choice-3')
const choice4 = document.querySelector('#choice-4')
const choice5 = document.querySelector('#choice-5')
const pickBread = document.querySelector('#bread')
const pickIng1 = document.querySelector('#ingredient-choice-1')
const pickIng2 = document.querySelector('#ingredient-choice-2')
const pickDressing = document.querySelector('#dressing')
const pickDrink = document.querySelector('#drink')
const getSelect = document.getElementsByTagName('select')
let orderList=[]



const showOptions =()=> {
    startOrder.style= 'display: none';
    choice1.style='display:flex';    
    if(choice1 ===true) {
        breadValue = pickBread.value
        console.log(breadValue) 
    }
    else if(choice2 ===true){
        orderList.push[pickIng1.value];
        console.log(orderList)
    }
    console.log('hola')
}

startOrder.addEventListener('click',showOptions)




/*const getOrder=(event)=> {
    const selectClicked = event.target.value;
    if (selectClicked) {
        orderList.push(selectClicked);
        console.log (orderList)
    } 
}*/



/*for (i = 0; i < pickIngredients.length; i++) {
        
    newArrayColor.push(simonColor[PositionColor]);
    console.log(newArrayColor)
    printArrayColor.innerHTML = newArrayColor;
    startGame.style= 'display: block';
}
for 
printArrayColor.style = 'display: none';
colorBox.style= 'display: flex';
startGame.style= 'display: none';*/
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


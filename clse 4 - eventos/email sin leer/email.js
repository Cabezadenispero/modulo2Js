const list=document.querySelector('ul');
list.style=`color:red;`

const emails=document.getElementsByClassName(`email`)

const gris = function(evento) {
    evento.srcElement.style="color:green;"
}

for (i = 0; i<emails.length; i++) {
    emails[i].addEventListener ('click', gris, false)
}






/*const list=document.querySelector('#list');
list.style=`font-weight: 700;`

const emails=document.querySelector('.email')


const leido=()=>{
    for(let i=0; i<emails.length; i++){
        emails[i].style.backgroundColor="red";
    
    }
        
    
} 
    
    
emails.addEventListener('click',leido)*/
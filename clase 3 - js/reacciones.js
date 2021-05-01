const titleStyle= document.querySelector (`h3`);
titleStyle.style= `font-Size: 55px; color: blue;`

const loremStyle = document.querySelector(`p`);
loremStyle.style= `font-Size: 35px; color: grey;`

const boxLikeLove = document.querySelectorAll (`div`)
boxLikeLove.style= `width: 600px; 
                    height: 100px; 
                    padding: 100px; 
                    background-color: #A9BED9; 
                    border-radius: 35px; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center;`;

const styleSpan= document.getElementsByTagName (`span`)
styleSpan.style= `margin:10px; width: 100px; color: pink; text-align:center; border-radius: 35px; padding:15px; background-color: orange;`
                    
const likeText= document.querySelector (`#like`);
const likeCant = prompt("ingrese cantidad de Me gusta");
likeText.innerHTML = likeCant + " Me gusta";
                    
const loveText= document.querySelector (`#love`);
const loveCant = prompt("ingrese cantidad de Me gusta");
loveText.innerHTML = loveCant + " Me encanta";
                    
const awesomeText= document.querySelector (`#awesome`);
const awesomeCant = prompt("ingrese cantidad de Me gusta");
awesomeText.innerHTML = awesomeCant + " Me asombra";


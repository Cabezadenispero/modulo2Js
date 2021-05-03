const imagen= document.querySelector ("img")
const favoritos= document.querySelector (".favorita-box")

let agregarAFavoritos=function(){ 
    favoritos.setAttribute("src", imagen.src) = imagen.src
}

imagen.addEventListener (`mouseover`, agregarAFavoritos)




/*
mode_btn.onclick = () => {
  modes_menu.classList.toggle('modes_menu--mostrar');
  modes_menu.classList.toggle('modes_menu--ocultar');
}

const imgFormat= document.getElementsByClassName('smallSize');
const bigImg= document.querySelector('#imgBig');

bigImg.style=`height:500px;`




for(let i=0; i < imgFormat.length; i++){
    imgFormat[i].style.height="100px";
    const changeSize=()=>{   
        bigImg.setAttribute('src',imgFormat[i].src)
    }
    //Esto funciona si hago click sobre una de las imagenes
    //imgFormat[i].addEventListener('click', changeSize);
    imgFormat[i].addEventListener('mouseover', changeSize);
};
*/
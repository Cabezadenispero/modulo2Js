
/*window.nambahData = function() {
    var a = document.getElementsByName("harga");
    var b = a[0].cloneNode(false);
    document.getElementById("form").appendChild(b);
}*/

const images = document.getElementsByClassName("img-fav")
const listFav= document.getElementById("list-fav")

for(let i=0; i <images.length; i++){
    const imgClone = images[i].cloneNode(true);
    
    const addToFav =()=>{
    listFav.appendChild(imgClone);
    console.log(listFav)
    
    const borrarCosito=()=>{
    listFav.removeChild(imgClone);
    }
    
    imgClone.addEventListener('click', borrarCosito)
    }
    images[i].addEventListener("click", addToFav);
    
} 


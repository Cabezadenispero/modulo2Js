
/*window.nambahData = function() {
    var a = document.getElementsByName("harga");
    var b = a[0].cloneNode(false);
    document.getElementById("form").appendChild(b);
}*/

const img = document.getElementById("img-fav")
const listFav = document.getElementById("list-fav")
const imgClone = img.cloneNode(true);
console.log(imgClone)

const addToFav = () => {
    listFav.appendChild(imgClone)
    console.log(listFav)
}

img.addEventListener("click", addToFav)
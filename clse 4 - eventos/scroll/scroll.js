const heightBody = document.getElementById (`height-body`)
heightBody.style.height=`2500px`



function colorScroll() {
  if(0<window.scrollY && window.scrollY<=500) {
    heightBody.style.backgroundColor="pink"
  } else if(501<window.scrollY && window.scrollY<=1000) {
    heightBody.style.backgroundColor="red"
  } else if(1001<window.scrollY && window.scrollY<=1500) {
    heightBody.style.backgroundColor="green"
  } else if(1501<window.scrollY && window.scrollY<=2000) {
    heightBody.style.backgroundColor="blue"
  }
  
}

window.addEventListener('scroll', colorScroll);


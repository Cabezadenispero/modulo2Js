
const barraContenedora=document.querySelector('#barra-contenedora')
const barraProgreso=document.querySelector('#barra-indicadora-progreso')
const contador=document.querySelector('#contador-progreso')
const cajaContador=document.querySelector('p')


barraContenedora.style =`padding:10px; margin: 50px;height: 200px; width: 1000px; border-radius: 35px; background-color: gray; display: flex; justify-content: flex-start; align-items: center; overflow: hidden;`
barraProgreso.style= `height: 180px; border-radius: 35px; background-color: pink;`
cajaContador.style= `align-items: center;`
let anchoBarra = 0


menos.addEventListener('click', ()=>{
    anchoBarra = anchoBarra - 10
    let anchoBarraPx = anchoBarra * 10
    barraProgreso.style.width =`${anchoBarraPx}px`;
    console.log(barraProgreso.style)
    contador.innerHTML = anchoBarra
})
mas.addEventListener('click', ()=>{
    anchoBarra = anchoBarra + 10
    let anchoBarraPx = anchoBarra * 10
    console.log(anchoBarraPx)  
    barraProgreso.style.width = `${anchoBarraPx}px`;
    console.log(barraProgreso.style)
    contador.innerHTML = anchoBarra
})


function flechasAuDis(event){
	if(event.keyCode == '39'){
        anchoBarra = anchoBarra + 10;
        let anchoBarraPx = anchoBarra *10;
        barraProgreso.style.width = `${anchoBarraPx}px`;
        contador.innerHTML = anchoBarra
	}

	if(event.keyCode == '37'){
		anchoBarra = anchoBarra - 10;
        let anchoBarraPx = anchoBarra *10;
        barraProgreso.style.width = `${anchoBarraPx}px`;
        contador.innerHTML = anchoBarra	
	}
	
}

document.onkeyup = flechasAuDis;




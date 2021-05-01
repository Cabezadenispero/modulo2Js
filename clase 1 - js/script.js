// 1 saludo

let nombre;
let apellido;
nombre=prompt("Introduzca su nombre");
apellido=prompt("Introduca su apellido");
alert("Usted es "+nombre + apellido)

// 2 Helados

let sabor1;
let sabor2;
let sabor3;
sabor1=prompt("Introduzca un gusto de helado");d
sabor2=prompt("y ahora otro para el medio");
sabor3=prompt("por último, ¿que sabero encima?");
alert("Aquí está su helado de "+sabor1+", "+sabor2+" y "+sabor3)


// 3 datos personales

const nombre=prompt("su nombre");
const apellido=prompt("apellido");
const edad=prompt("edad");
const nacionalidad=prompt("nacionalidad");
const dni=prompt("numero de identidad");
alert("datos ingresados: "+nombre+", "+apellido+", "+edad+" , "+nacionalidad+"y"+dni);

// 4 lista reproduccion

const playlist=prompt("Dale un nombre a tu playlist");
const c1=prompt("elige una canción para empezar");
const c2=prompt("una más para seguir");
const c3=prompt("y esta para terminar");
alert("Se ha creado la playlist: "+playlist+", que contiene estas canciones:"+c1+" , "+c2+" y "+ c3);

// 5 direccion completa

const calle=prompt("Diganos su calle");
const numero=prompt("número");
const dpto=prompt("¿que departamento?");
const codigopostal=prompt("Código Postal");
const ciudad=prompt("ciudad");
const pais=prompt("Pais");
alert("Su domicilio completo es: "+calle+","+numero+", "+dpto+", "+codigopostal+", "
+ciudad+","+ pais);

// 6 años perro

let años=prompt("Diganos su edad");
const perro=7;
const resultado=(años*perro)
alert(`Si usted fuera un perro su edad sería:${resultado}`) ;

// 7 minutos segundo

let minutos=prompt("Diganos cuantos minutos tiene");
const segundos=60;
alert("usted dispone de "+(minutos*segundos)+"segundos") ;

// 8 dias a segundos

let dias=prompt("Diganos cuantos dias necesita convertir en segundos");
const segundos=60*60*24;
const resultado=(dias*segundos)
alert(`usted dispone de ${resultado} segundos`) ;

// 9 km a millas

let km=prompt("Diganos cuantos km necesita convertir a millas");
const millas=0.6213710;
const resultado=(km*millas)
alert(`usted quiere recorrer ${resultado} millas`) ;

// 10 Area de triangulo 

let base=prompt("Diganos la base");
let altura=prompt("Diganos la altura");
alert("el area de su triángulo es "+((base*altura)/2)+"cm") ;


// 11 rectángulo 

let base=prompt("Diganos la base");
let altura=prompt("Diganos la altura");
alert("el perimetro de su rectangulo es "+((base*altura)*2)+"cm") ;

// 12 porcentaje 

let cantidad=prompt("Diganos la cantidad");
let porcentaje=prompt("Diganos el porcentaje que desea conocer ");
alert("Resultado "+((cantidad*porcentaje)/100)+"%") ;


// 13 tiempo de viaje

let km=prompt("Distancia a recorrer");
const bicicleta=30;
const avion=2;
const andando=50;
const coche=12;
alert ( "Usted tardaría:" 
+ (km*bicicleta) + " en bicicleta," +
(km*avion) + " volando en avión," +
(km*andando) + " llendo a pie, o " +  
(km*coche) + " en coche"); 


// 14 duración vuelo 

let escala1=prompt("ingrese destino");
let tiempo1=prompt("ingrese la cantidad de horas")
let escala2=prompt("ingrese destino");
let tiempo2=prompt("ingrese la cantidad de horas")
let escala3=prompt("ingrese destino");
let tiempo3=prompt("ingrese la cantidad de horas")
let coso = parseInt(tiempo1) + parseInt(tiempo2) + parseInt(tiempo3)
alert ( "Usted visitará:"+escala1+" ," + escala2+ " ,"  + escala3 +
" y tardará " + coso + " horas en sus escalas") ;

// 15 Incremento 

let nropartida=prompt("ingrese el numero de partida");
let incremento=prompt("ingrese el incremento")
let coso = parseInt(nropartida) + parseInt(incremento)
let coso2 = parseInt(nropartida) + (parseInt(incremento)*2)
let coso3 = parseInt(nropartida) + (parseInt(incremento)*3)
alert ("Incremento 1 total: " + coso + " " 
+ "incremento 2 total "+ coso2 + ", incremento 3 total " + coso3 )


// 16 celsius a fahrenheit 

let grados=prompt("Diganos cuantos grados necesita convertir a celsius");
const celsius=32;
alert("La temperatura solicitada es "+(grados*celsius)+" celsius") ;

// 17 multiplos 

let valor1=prompt("deme un valor")
let multiplo=parseInt(valor1)
let valor2=prompt("diga otro valor para saber si es multiplo del anterior")
let divisor=parseInt(valor2)

function    resultado(parametro1, parametro2) {
if ((multiplo%divisor) == 0) {
alert("es múltiplo")
}
else {
alert("no es múltiplo")
}
}
// 18 segundos horas 

let segundosdados=prompt("Diganos cuantos segundos necesita convertir:");
let segundosconvertidos=parseInt(segundosdados)
const horas=((segundosconvertidos/ 60) /60;
const minutos=(segundosconvertidos/60);
let minutosahoras=((segundosconvertidos / minutos) / horas)
alert (`${segundosconvertidos} segundos son= ${horas} horas, ${minutos} minutos y `)

----

let segundosdados=prompt("Diganos cuantos segundos necesita convertir:");
let segundosconvertidos=parseInt(segundosdados)
const horasSeg=3600;
let segAHoras=((segundosconvertidos / horas)
alert (`Usted dispone de ${segAHoras} horas`)

let cantidad= prompt ("ingresa una cantidad de segundos")
let horas= (cantidad / 3600)
let minutos= ((cantidad %3600)/60);
let segundos= cantidad %60;
alert (`${cantidad} segundos son= ${horas} horas, minutos= ${minutos} y ${segundos}`)


// 19 Cantidad de carácteres 

let frase=prompt("Dime una frase y te digo cuantos caracteres tiene");
alert("tu frase tiene "+ frase.length +" caracteres") ;

//  20 cantidad de huéspedes 

let habx2=prompt("¿cuántas habitaciones para dos huéspedes quedan?");
let habx3=prompt("¿para tres huéspedes?");
let habx4=prompt("¿y de cuatro?");
let total2 = parseInt(habx2) 
let total3 = parseInt(habx3) 
let total4 = parseInt(habx4) 
let huespedesTotales=((total2*2)+(total3*3)+(total4*4))
alert (`Hay lugar en el hotel para ${huespedesTotales} huéspedes en total.` )



// 21 calculador de gastos

const dinerodisponible=prompt("Monto que hay en su cuenta")
let servicio1=prompt("Diganos que quiere pagar")
let montopago1=prompt ("Monto a pagar")
let servicio2=prompt("Diganos que quiere pagar")
let montopago2=prompt ("Monto a pagar")
let servicio3=prompt("Diganos que quiere pagar")
let montopago3=prompt ("Monto a pagar")
const saldoinicial=parseInt(dinerodisponible)
const pago1 = parseInt(montopago1) 
const pago2 = parseInt(montopago2) 
const pago3 = parseInt(montopago3) 
const saldofinal=(saldoinicial - pago1 - pago2 - pago3)
alert (`Usted disponía de ${dinerodisponible}, ha pagado 
${servicio1} por valor de ${montopago1}, ha pagado ${servicio2} 
por valor de ${montopago2},ha pagado ${servicio3} por valor de ${montopago3},  
quedan en su cuenta ${saldofinal}`)

// 22 orden de compras

let cRojas=prompt("¿Cuántas camisetas rojas quire?")
let cAzules=prompt("¿azules?")
let cNegras=prompt("¿y negras? ")
let cuotas=prompt("¿en cuantas cuotas desea pagar su compra")
const cantRojas = parseInt(cRojas) 
const cantAzules = parseInt(cAzules) 
const cantNegras = parseInt(cNegras) 
const cuotasDiv= parseInt(cuotas)
const montoRojas= (cantRojas*5)
const montoAzules= (cantAzules*10)
const montoNegras= (cantNegras*2)
const saldofinal=(montoAzules + montoRojas + montoNegras)
const cuotasTotal=(saldofinal/cuotasDiv)
alert (`Usted ha elegido pagar  ${saldofinal} euros , en cuotas: ${cuotas} , cada cuota tiene un valor de ${cuotasTotal} euros.`)

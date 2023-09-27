"use strict"; // obligatorio declarar variables y constantes

let nombre="María";
var apellidos="López";
const edad=23;
//edad=34;

if(nombre==="María"){
    const edad=23;
    let nombre="Pepe";
    console.log("Se llama " +nombre + " " + apellidos + " y tiene " + edad + " años" );
    console.log('Se llama ${nombre} ${apellidos} y tiene ${edad} años ');

}

//muestra error

//console.log(`se llama ${nombre}` ${apellidos} y tiene ${edad} años.`)
console.log('se llama',nombre,' ',apellidos,' y tiene ',edad, ' años.');

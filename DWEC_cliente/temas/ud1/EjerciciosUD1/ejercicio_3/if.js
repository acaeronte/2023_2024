// Usando if
let edad = prompt("Introduce tu edad:");

if (!typeof Number(edad) === 'number') {
  console.log("Error, debe ser un número");
/* también se puede usar el isNaN
if (isNaN(edad)) {
  console.log("Error, debe ser un número");*/  
} else {
  edad = parseInt(edad);

  if (edad < 18) {
    console.log("Eres menor de edad.");
  } else if (edad <= 30) {
    console.log("Eres muy joven.");
  } else if (edad <= 60) {
    console.log("Eres una persona adulta.");
  } else {
    console.log("Eres una persona adulta mayor.");
  }
}


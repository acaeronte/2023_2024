//Usando switch
let edad = prompt("Introduce tu edad:");

if (!typeof Number(edad) === 'number') {
  console.log("Error, debe ser un número");
} else {
  edad = parseInt(edad);

  switch (true) {
    case (edad < 18):
      console.log("Eres menor de edad.");
      break;
    case (edad <= 30):
      console.log("Eres muy joven.");
      break;
    case (edad <= 60):
      console.log("Eres una persona adulta.");
      break;
    default:
      console.log("Eres una persona adulta mayor.");
  }
}

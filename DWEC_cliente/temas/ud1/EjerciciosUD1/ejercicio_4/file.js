while (true) {
    var opcion = prompt("Menú:\n1. Área del triángulo\n2.Área del rectángulo\n3.Media aritmética de dos números\n4. Salir");

    if (opcion === null) {
        alert("Fin del ejercicio.");
        break;
    }

    opcion = parseInt(opcion);

    if (opcion === 1) {
        var base = parseFloat(prompt("Introduce la longitud del triángulo: "));
        var altura = parseFloat(prompt("Introduce la altura del triángulo: "));
        var area = 0.5 * base * altura;
        console.log("El área del triángulo es: " + area);
    } else if (opcion === 2) {
        var longitud = parseFloat(prompt("Introduce la longitud del rectángulo: "));
        var ancho = parseFloat(prompt("Introduce el ancho del rectángulo: "));
        var area = longitud * ancho;
        console.log("El área del rectángulo es: " + area);
    } else if (opcion === 3) {
        var num1 = parseFloat(prompt("Introduce el primer número: "));
        var num2 = parseFloat(prompt("Introduce el segundo número: "));
        var media = (num1 + num2) / 2;
        console.log("La media aritmética de " + num1 + " y " + num2 + " es: " + media);
    } else if (opcion === 4) {
        alert("Fin del ejercicio.");
        break;
    } else {
        alert("Error: Opción no válida. Por favor, elija una opción del 1 al 4.");
    }
}

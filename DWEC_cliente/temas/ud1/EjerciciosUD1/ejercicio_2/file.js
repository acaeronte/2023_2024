// Usando while
console.log('---------------Script con while---------------');
let valor = 1;

while (valor <= 100) {
  if (valor % 2 !== 0 && valor % 3 !== 0 && valor % 7 !== 0) {
    console.log('El número ',valor,' no es múltiplo de 3 ni de 7');
  }
  valor++;
}


//Usando do..while
console.log('---------------Script con do..while---------------');
let valor2 = 1;

do {
  if (valor2 % 2 !== 0 && valor2 % 3 !== 0 && valor2 % 7 !== 0) {
    console.log('El número ',valor2,' no es múltiplo de 3 ni de 7');
  }
  valor2++;
} while (valor2 <= 100);


//Usando for
console.log('---------------Script con For---------------');
for (let valor3 = 1; valor3 <= 100; valor3++) {
    if (valor3 % 2 !== 0 && valor3 % 3 !== 0 && valor3 % 7 !== 0) {
        console.log('El número ',valor3,' no es múltiplo de 3 ni de 7');
    }
  }

  
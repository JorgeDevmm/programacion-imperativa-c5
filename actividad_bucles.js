// Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// for (let i = 5; i <= 20; i += 3) {
//   console.log(i + ' ');
// }

// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

// function sumatoria() {
//   let suma = 0;
//   for (let i = 0; i <= 100; i++) {
//     suma += i;
//   }

//   return suma;
// }

// let sumaTotal = sumatoria();

// console.log(sumaTotal);

// Dado un número entero positivo, mostrar su factorial. El factorial de
// Un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

let numero = 7;

function factorialNumero(numero) {
  let factorial = 1;

  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}

let factorialFinal = factorialNumero(numero);

console.log(factorialFinal);

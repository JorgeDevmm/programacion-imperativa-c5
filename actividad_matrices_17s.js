/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
  [6, 7, 8, 9, 4],
  [5, 9, 7, 6, 3],
  [6, 8, 9, 3, 9],
  [1, 7, 2, 9, 6],
  [9, 4, 2, 8, 3],
];

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const sumaNumeros = () => {
  let sumaTotal = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      sumaTotal += matriz[i][j];
    }
  }

  return sumaTotal;
};

let resultado = sumaNumeros();
console.log(resultado);

// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

let matriz10 = [];

const generarMatriz = (matriz) => {
  let contador = 1;
  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz[i][j] = contador;
      contador++;
    }
  }
};

generarMatriz(matriz10);

console.table(matriz10);

// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.

const sumaDiagonalA = (matriz) => {
  let sumaA = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (i == j) {
        sumaA += matriz[i][j];
      }
    }
  }

  return sumaA;
};

let sumaFinalDiagonalA = sumaDiagonalA(matriz10);

console.log(`A)La suma diagonal A ${sumaFinalDiagonalA}`);

const sumaDiagonalB = (matriz) => {
  let sumaB = 0;
  for (let i = 0; i < matriz.length; i++) {
    sumaB += matriz[i][matriz.length - 1 - i];
  }

  return sumaB;
};

let sumaFinalDiagonalB = sumaDiagonalB(matriz10);

console.log(`B)La suma diagonal B ${sumaFinalDiagonalB}`);

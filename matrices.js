// Matrices

let mat = [
  [1, 2, 5],
  [5, 1, 6],
  [7, 5, 2],
];

console.log(mat[2][1]);

const recorrerFila = () => {
  for (let i = 0; i < mat[1].length; i++) {
    const element = array[i];
  }
};

let mat2 = [
  [1, 2, 5],
  [5, 1, 6],
  [7, 5, 2],
];

const recorrerCol = (matriz, numCol) => {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    // matriz[i][numCol] *= -1;
    suma += matriz[i][numCol];
  }

  return suma;
};

// recorrerCol(mat2, 2);
// console.table(mat2);

let res = recorrerCol(mat2, 2);
console.log(res);


let mat3 = [
  [1, 2, 5],
  [5],
  [7, 5, 2],
];

const recorrerCol2 = (matriz, numCol) => {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    // matriz[i][numCol] *= -1;
    if (matriz[i][numCol] !== undefined) {
      suma += matriz[i][numCol];
    } 
  }

  return suma;
};
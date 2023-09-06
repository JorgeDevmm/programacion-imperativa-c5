// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// a. Obtener en un nuevo array las edades menores a 18.

let edades2 = [];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] < 18) {
    edades2.push(edades[i]);
  }
}

console.log(edades2);

// b. Obtener en un nuevo array las edades mayor o igual a 18.

let edades3 = [];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    edades3.push(edades[i]);
  }
}

console.log(edades3);

// c. Obtener en un nuevo array las edades igual a 18.
let edades4 = [];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] === 18) {
    edades4.push(edades[i]);
  }
}

console.log(edades4);

// d. Obtener el menor.

let menor = edades[0];
for (let i = 1; i < edades.length; i++) {
  if (menor > edades[i]) {
    menor = edades[i];
  }
}

console.log(menor);

// e. Obtener el mayor.

let mayor = edades[0];
for (let i = 1; i < edades.length; i++) {
  if (mayor < edades[i]) {
    mayor = edades[i];
  }
}

console.log(mayor);

// f. Obtener el promedio de edades.

let promedio = 0;
let suma = 0;
for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

promedio = suma / edades.length;

console.log(promedio);

// g. Incrementar en 1 todas las edades.

for (let i = 0; i < edades.length; i++) {
  edades[i] = edades[i] + 1;
}

console.log(edades);

//
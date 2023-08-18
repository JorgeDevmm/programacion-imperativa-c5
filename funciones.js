// funciones

// console.log('paso adelante');
// console.log('Paso al costado derecho');
// console.log('salto');
// console.log('prende el foco');

// function f1() {
//   console.log('paso adelante');
//   console.log('paso adelante');
//   console.log('paso adelante');
// }

// f1();

// console.log('salto');
// console.log('prende el foco');

let nombreDeUsuario = 'carmen';

function saludar(nombre) {
  let saludo = `Hola ${nombre} como estas`;

  return saludo;
}

let saludoFinal = saludar(nombreDeUsuario);

console.log(saludoFinal);

function sumar() {
  let n1 = 2;
  let n2 = 5;

  return n1 + n2;
}

let sumaFinal = sumar();

console.log(sumaFinal);

// funcion con parametros

function sumar2(n1, n2) {
  return n1 + n2;
}

let res = sumar2(3, 9);
console.log(res);

let res2 = sumar2(1, 7);
console.log(res2);

let res3 = sumar2(8, 1);
console.log(res3);

// funcion con parametro con ingreso del usuario con variables

let numeroUno = 4;
let numeroDos = 3;

function sumar3(numeroUno, numeroDos) {
  return numeroUno + numeroDos;
}

let res4 = sumar3(3, 9);
console.log(res4);

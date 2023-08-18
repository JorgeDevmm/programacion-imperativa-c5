// let numeroUno = 15;
// let numeroDos = 20;

// console.log(numeroUno + numeroDos);

// let nombrelumno;
// nombrelumno = prompt('Ingrese su nombre');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function preguntarValores() {
  rl.question('Ingrese su nombre: ', (nombre) => {
    console.log(`Hola, ${nombre}!`);
    rl.close();
  });
}

preguntarValores();

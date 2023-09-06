//Realizar una función que reciba por parámetro dos valores,
//el primero será numérico y el segundo booleano.
//si el número es par y el booleano es true entonces retornar "HA PASADO LA CONDICIÓN"
//En cambio, si el número es impar y el booleano es false retornar  "NO HA PASADO LA CONDICION"
//Para cualquier otro caso, retornar -1

let numero = 16;
let booleano = true;

const calcularCondicion = (num, bool) => {
  if (num % 2 == 0 && bool) {
    return `Ha pasado la condición`;
  } else if (num % 2 != 0 && !bool) {
    return `No Ha pasado la condición`;
  }
  return -1;
};

let validarCondición = calcularCondicion(numero, booleano);

console.log(validarCondición);

//Realizar una función que indique si una persona se encuentra apta para una
//competencia física. Para eso, debemos realizar uan función que reciba dos parámetros
//la edad de la persona (Number)
//Si ha entregado sus estudios médicos (Booleano)
//La función deberá evaluar las siguientes condiciones y retornar
//en cada caso lo que se pida:
//Si ha entregado sus estudios y es mayor o igual de 18 años: retornar un valor booleano true.
//Si ha entregado sus estudios pero es menor de 18 años: retorna un string que diga "sólo puedes competir con un adulto acompañante".
//Para cualquier otro caso: retorna un valor booleano false

const competidor = {
  nombre: 'jorge',
  edad: 18,
  estudios: true,
};

const verificarEstadoFisico = (edad, estudios) => {
  if (estudios) {
    return edad >= 18
      ? true
      : `Solo puedes competir con un adulto acompañante por que tienes de edad ${edad}`;
  }
  return false;
};

let resultado = verificarEstadoFisico(competidor.edad, competidor.estudios);

console.log(resultado);

//Realizar una función que reciba un array como parámetro, y lo recorra
//para filtrar los objetos cuya cantidad de páginas sea mayor a 300.
//la función debéra retornar un nuevo arreglo con los libros que cumplan con la condicion antes mencionadas

let libros = [
  {
    nombre: 'HistoriasInconsciente',
    autor: 'Gabriel Rolón',
    paginas: 352,
  },
  {
    nombre: 'OperacionMasacre',
    autor: 'Rodolfo Walsh',
    paginas: 236,
  },
  {
    nombre: 'elAlquimista',
    autor: 'Paulo Coehlo',
    paginas: 192,
  },
  {
    nombre: 'elCampamento',
    autor: 'Blue Jeans',
    paginas: 480,
  },
];

let recorrerLibro = (array) => {
  let arrayFinal = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].paginas > 300) {
      arrayFinal.push(array[i]);
    }
  }

  return arrayFinal;
};

let arrayResultado = recorrerLibro(libros);

console.log(arrayResultado);

for (let i = 0; i < arrayResultado.length; i++) {
  console.log(
    `Nombre: ${arrayResultado[i].nombre} - Autor: ${arrayResultado[i].nombre} - Paginas: ${arrayResultado[i].paginas}`
  );
}

// aplicando filter
// let arrayRes = libros.filter((element) => element.paginas > 300);
// console.log(arrayRes);

// Agregar un id a cada libro
const agregarID = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].id = i + 1;
    array[i].paginas += 50;
  }
};

agregarID(libros);
console.log(libros);

//A partir de un array de correos, recorrerlo para corroborar si son válidos.
//Para ello, por el momento, debemos buscar el carácter "@" en cada elemento y
//agregar aquellos que lo tengan al array de correso admitidos. En caso de no encontrar el carácter, se deberá agregar al array de correros descartados.
//Desarrollar una función que realice la verificación de cada elemento del array de correos pendientes. En caso de validar, agregar al arrayCorreoAdmitidos.
//Motrar por pantalla la cantidad y los elementos de cada array

let arrayCorreosPendientes = [
  'ironma@digitalhouse.com',
  'loki%digitalhouse.com',
  'loki@digitalhouse.com',
  'thanosdigitalhouse.com',
  'thanos@digitalhouse.com',
];

// array de correo admitidos

let arrayCorreosAdmitidos = [
  'thor@digitalhouse.com',
  'tucuMan@digitalhouse.com',
  'wanda@digitalhouse.com',
];

let arrayCorreosDescartados = [];

const validarCorreos = () => {
  for (let i = 0; i < arrayCorreosPendientes.length; i++) {
    let correo = arrayCorreosPendientes[i];
    if (correo.includes('@')) {
      arrayCorreosAdmitidos.push(correo);
    } else {
      arrayCorreosDescartados.push(correo);
    }
  }

  arrayCorreosPendientes = [];
};

validarCorreos();

// console.log(arrayCorreosPendientes);
// console.log(arrayCorreosAdmitidos);
// console.log(arrayCorreosDescartados);

const pendientes = {
  total: arrayCorreosPendientes.length,
  correos: arrayCorreosPendientes,
};

console.log(pendientes.total);
console.log(pendientes.correos);

const admitidos = {
  total: arrayCorreosAdmitidos.length,
  correos: arrayCorreosAdmitidos,
};

console.log(admitidos.total);
console.log(admitidos.correos);

const descartados = {
  total: arrayCorreosDescartados.length,
  correos: arrayCorreosDescartados,
};

console.log(descartados.total);
console.log(descartados.correos);

//Crear una función que reciba un array por parametros y devuelva el menor numero

let numeros = [10, 5, 2, 3];

const hallarMenorNumero = (num) => {
  let menor = num[0];
  for (let i = 1; i < num.length; i++) {
    if (menor > num[i]) {
      menor = num[i];
    }
  }

  return menor;
};

let numeroMenor = hallarMenorNumero(numeros);

console.log(numeroMenor);

// programación funcional
console.log(Math.min(...numeros));

//encontrar el objeto con menor pagina

const hallarMenorPagina = (array) => {
  let menor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (menor.paginas > array[i].paginas) {
      menor = array[i];
    }
  }

  return menor;
};

let numeroMenor2 = hallarMenorPagina(libros);

console.log(numeroMenor2);

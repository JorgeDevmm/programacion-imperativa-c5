// Arrays y colecciones

//A. Acceder a elementos específicos de un array.
let frutas = ['Manzana', 'Piña', 'Naranja'];
let frutas2 = ['Sandia', 'Pera', 'Melon', 'Fresa'];
console.log(frutas[1]);

//B. Modificar cada uno de sus elementos e imprimirlos.
frutas[1] = 'Pera';

// C. Agregar elementos a un array
frutas.push('Platano');

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// D. Extraer elementos de un array
let elementoExtraido = frutas.pop();
console.log(elementoExtraido);

// E. Comparar elementos de un array con los elementos de otro
function validarCoincidencias() {
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === frutas2[i]) {
      return `Se encontro la coincidencia de la fruta => ${frutas[i]}`;
    }
  }
}

let coincidencias = validarCoincidencias();
console.log(coincidencias);

// ¿Qué devuelven estas líneas de código?
// En este ejercicio deberás pensar qué devuelven éstas líneas de códigos sin probarlos en la consola.
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); //rpta = undefined
let grupoDeAmigos = [
  'Harry',
  'Ron',
  'Hermione',
  'Spiderman',
  'Hulk',
  'Ironman',
  'Penélope Glamour',
  'Pierre Nodoyuna',
  'Patán',
];
console.log(grupoDeAmigos[5]); //Rpta = Ironman

let str = 'un string cualquiera';
let arrayAleatorio = [
  'Digital',
  'House',
  'true',
  'string',
  '123',
  'false',
  '54',
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]); //rpta = 'un string cualquiera

// Colecciones de películas (y más…)

// 1.Crear la estructura adecuada para guardar las siguientes películas:
let peliculas = [
  'star wars',
  'totoro',
  'rocky',
  'pulp fiction',
  'la vida es bella',
];

for (let valor of peliculas) {
  console.log(valor);
}

// 2.Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

const convertirMayuscula = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }

  return array;
};

let arrayMayuscula = convertirMayuscula(peliculas);
console.log(arrayMayuscula);

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:

let peliculasAnimadas = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite',
];

let elementoEliminado = peliculasAnimadas.pop();

const AgregarElementosArray = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i].toUpperCase());
  }

  return array1;
};

let arrayFinal = AgregarElementosArray(peliculas, peliculasAnimadas);

console.log(arrayFinal);

// 4 Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

// let elementoEliminado = peliculasAnimadas.pop();

//5 Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
// 	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// 	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo!

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const conpararValores = (array, array2) => {
  let aux = true;
  let posicion;

  for (let i = 0; i < asiaScores.length; i++) {
    if (asiaScores[i] === euroScores[i]) {
      aux = true;
    } else {
      aux = false;
      posicion = i;
      break;
    }
  }

  if (aux) {
    return `Los valores son iguales`;
  } else {
    return `Algunos de los valores no son iguales desde la posición => ${posicion}`;
  }
};

let comparacionValores = conpararValores(asiaScores, euroScores);

console.log(comparacionValores);

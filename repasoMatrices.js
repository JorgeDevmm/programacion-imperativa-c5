let gastos = [
  // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
  // EL MES ES FEBRERO QUE TIENE 28 DIAS
  [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950], // semana 4
];

// TODO
// CREANDO UNA FUNCIÓN REUTILIZABLE...
// CALCULAR GASTO TOAL DE LA TERCER SEMANA

const calcularGastoTotal = (numeroSemana, mat) => {
  let fila = numeroSemana - 1;

  let gastoTotal = 0;
  for (let i = 0; i < mat[fila].length; i++) {
    gastoTotal += mat[fila][i];
  }

  return gastoTotal;
};

let resultado = calcularGastoTotal(3, gastos);

console.log(resultado);

// TODO
// EN EL DIA QUE MAS SE GASTO, CUANTO FUE?
// EN QUE DÍA Y SEMANA, SE PRODUJO ESE GASTO

const diaMasGasto = (mat) => {
  let diaMayor = [0][0];
  let semana = 0;
  let dia = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (diaMayor < mat[i][j]) {
        diaMayor = mat[i][j];
        semana = i;
        dia = j;
      }
    }
  }

  return { monto: diaMayor, semana: semana + 1, dia: dia };
};

let resultado2 = diaMasGasto(gastos);

console.log(resultado2);
let dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo',
];

console.log(
  `El monto de gasto mayor fue ${resultado2.monto} la semana fue ${
    resultado2.semana
  } y el día fue ${dias[resultado2.dia]}`
);

//TODO
// CREANDO UNA FUNCION REUTILIZABLE...
// QUEREMOS SABER EL TOTAL DE LO QUE SE GASTO SUMANDO TODOS LOS DIAS SABADOS
// ¿COMO LO HARIAS?

const totalSumaSabados = (mat, diasemana) => {
  let sumaSabadosTotal = 0;
  for (let i = 0; i < mat.length; i++) {
    sumaSabadosTotal += mat[i][diasemana];
  }

  return sumaSabadosTotal;
};

let resultado3 = totalSumaSabados(gastos, 5);

console.log(`EL total de gastos de todos los días sabados es: ${resultado3}`);

//TODO
// CALCULAR EL TOTAL GASTADO DEL MES

const gastoTotalMes = (mat) => {
  let sumaTotalMes = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      sumaTotalMes += mat[i][j];
    }
  }

  return sumaTotalMes;
};

const resultado4 = gastoTotalMes(gastos);

console.log(resultado4);

// LINK Ejercicio
// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

const sumaNumeros = (mat) => {
  let sumaTotalNumeros = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] >= 10 && mat[i][j] < 1000) {
        sumaTotalNumeros += mat[i][j];
      }
    }
  }
  return sumaTotalNumeros;
};

const resultado5 = sumaNumeros(matriz);

console.log(resultado5);

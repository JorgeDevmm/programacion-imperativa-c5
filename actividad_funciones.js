let pulgadas = 7;

function convertirPulgadasCentimetros(pulgadas) {
  return pulgadas * 2.54;
}

let centimetrosTotales = convertirPulgadasCentimetros(pulgadas);
console.log(centimetrosTotales);

// 2
let nombre = 'pepito';

function convertirUrl(nombre) {
  return `htpp://www.${nombre}.com`;
}

let url = convertirUrl(nombre);
console.log(url);

// 3
let texto = 'funciones';

function agregarAdmiracion(texto) {
  return `${texto}!`;
}

let frase = agregarAdmiracion(texto);
console.log(frase);

// 4
let edad = 5;

function edadPerros(edad) {
  return edad * 7;
}

let edadFinal = edadPerros(edad);
console.log(edadFinal);

//5
let sueldoMensual = 500;

function valorHoraTrabajo(sueldoMensual) {
  return sueldoMensual * 40;
}

let valorXHora = valorHoraTrabajo(sueldoMensual);
console.log(valorXHora);

//6
function calculadorIMC(peso, altura) {
  // Convertir altura a metros cuadrados
  const alturaMetros = altura / 100; // Convertir la altura a metros (ya que viene en centímetros)
  const alturaCuadrada = alturaMetros * alturaMetros;

  // Calcular el IMC
  const imc = peso / alturaCuadrada;

  return imc;
}

console.log(calculadorIMC(70, 170));

//7
let texto1 = 'hola';

function convertirMayusculas(texto1) {
  return texto1.toUpperCase();
}

let textoMayuscula = convertirMayusculas(texto1);
console.log(textoMayuscula);

//8
let numero = 5;

function validarTipoDato(numero) {
  return typeof numero;
}

let tipoDato = validarTipoDato(numero);
console.log(tipoDato);

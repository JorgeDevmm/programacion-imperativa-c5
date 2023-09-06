const usuario = {
  email: 'pepe@gmail.com',
  nombre: 'pepe',
  edad: 22,
  iniciarSesion: function () {
    console.log('Inicio sesión');
  },
  cerrarSesion: function () {
    console.log('Cerro sesión');
  },
};

// DOT NOTATION
console.log(usuario.nombre);

// BRACKET NOTATION
console.log(usuario['edad']);

usuario.iniciarSesion();

// Manipulación
usuario.edad = usuario.edad + 1;

// Agregar
usuario.apellido = 'perez';

// borrar
delete usuario.email;

// console.log(usuario.edad);

console.log('');

for (let propiedad in usuario) {
  console.log(usuario[propiedad]);
}

//productos

let funcionPromediar = function () {
  let acumulador = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acumulador += this.notas[i];
  }

  return acumulador / this.notas.length;
};

let estudiantes = [
  {
    nombre: 'maria',
    notas: [6, 7, 9],
    promediar: funcionPromediar,
    domicilio: {
      calle: 'italia',
      numero: 245,
    },
  },
  {
    nombre: 'pepito',
    notas: [4, 5, 9],
    promediar: funcionPromediar,
    domicilio: {
      calle: 'italia',
      numero: 245,
    },
  },
  {
    nombre: 'carmen',
    notas: [7, 8, 9],
    promediar: funcionPromediar,
    domicilio: {
      calle: 'italia',
      numero: 245,
    },
  },
];

// console.log(estudiantes.domicilio.numero);

const funcionParaProfesora = () => {
  for (let i = 0; i < estudiantes.length; i++) {
    console.log(
      `El promedio ${estudiantes[i].nombre} es ${estudiantes[i].promediar()}`
    );
  }
};

funcionParaProfesora();

// juancito --4

estudiantes.push({
  nombre: 'junacito',
  notas: [4, 7, 10],
  promediar: funcionPromediar,
});

const funcionParaAgregarEstudiante = (nombre, notas) => {
  estudiantes.push({
    nombre: 'junacito',
    notas: [4, 7, 10],
    promediar: funcionPromediar,
  });
};

funcionParaAgregarEstudiante('yoselin', [5, 6, 10]);
funcionParaAgregarEstudiante('carmelita', [9, 9, 10]);
funcionParaAgregarEstudiante('martin', [10, 9, 10]);

console.log('-------------------------');

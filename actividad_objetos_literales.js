//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 27771,
    titularCuenta: 'Abigael Natte',
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 8675,
    titularCuenta: 'Ramon Connell',
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 27363,
    titularCuenta: 'Jarret Lafuente',
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 32415,
    titularCuenta: 'Ansel Ardley',
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: 'Cuenta Unica',
    saldoEnPesos: 18789,
    titularCuenta: 'Jacki Shurmer',
  },
];
// podes continuar tu codigo a partir de aca!

for (propiedad of arrayCuentas) {
  for (valor in propiedad) {
    console.log(`${propiedad[valor]}`);
  }
  console.log('');
}

// 2
const banco = {
  clientes: [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: 'Cuenta Corriente',
      saldoEnPesos: 27771,
      titularCuenta: 'Abigael Natte',
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: 'Caja de Ahorro',
      saldoEnPesos: 8675,
      titularCuenta: 'Ramon Connell',
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: 'Caja de Ahorro',
      saldoEnPesos: 27363,
      titularCuenta: 'Jarret Lafuente',
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: 'Cuenta Corriente',
      saldoEnPesos: 32415,
      titularCuenta: 'Ansel Ardley',
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: 'Cuenta Unica',
      saldoEnPesos: 18789,
      titularCuenta: 'Jacki Shurmer',
    },
  ],
  consultarCliente: function (nombre) {
    let clienteEncontrado;

    for (let i = 0; i < this.clientes.length; i++) {
      if ((this.clientes[i].tipoDeCuenta = nombre)) {
        clienteEncontrado = this.clientes[i];
      }
      return clienteEncontrado;
    }
  },
  deposito: function (titular, cantidad) {
    
  }
};

let clienteFinalEncontrado = banco.consultarCliente('Jarret Lafuente');

console.log(clienteFinalEncontrado);

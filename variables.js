// AND --> &&

let estaLogueado = false;
let esAdmin = false;

let tienePermiso = estaLogueado === true && esAdmin === true;

console.log(tienePermiso);

// OR --> ||

let tienePermisoDos = estaLogueado === true || esAdmin === true;

console.log(tienePermisoDos);

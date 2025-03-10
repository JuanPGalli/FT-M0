// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  //Una opción:

  //return nombre.charAt(0).toUpperCase()+nombre.slice(1)
  
  //Otra opción:

  var nuevaPalabra = ''
  for (var i = 0; i < nombre.length; i++) {
    if(i===0){ 
      nuevaPalabra = nuevaPalabra + nombre[0].toUpperCase()
    }
    else nuevaPalabra = nuevaPalabra + nombre[i]
  }
  return nuevaPalabra
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  
// Una opción pasando el resultado a CB directamente:
  
// cb(numeros.reduce(function(acc, item){
//     return acc + item
// },0))

//Otra opción, guardando el resultado en una variable:

  var suma = numeros.reduce(function(acc, item){
    acc = acc + item
    return acc
  }, 0)
  return cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento){
    cb(elemento)
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 
  //Retornando directamente:

  // return array.map(function(elemento){
  //   return cb(elemento)
  // })
  
  // Esta opción es más avanzada:
  //return array.map(cb)

  //Guardando el nuevo array en una variable:

  var nuevoArreglo = array.map(function(elemento){
    return cb(elemento)
  })
  return nuevoArreglo
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 
  // return array.filter(function(elemento){
  //   var letraA = elemento.charAt(0)==="a"
  //   return letraA
  // })

  //Otra opción usando una variable:

  var nuevoArray = array.filter(function(elemento){
    if(elemento[0]==='a') return elemento
  })
  return nuevoArray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

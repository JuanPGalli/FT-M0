// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

// Una forma de resolverlo:
//  var nuevoArr = Object.keys(objeto).map(function (key) {
//     return [key, objeto[key]];})
//     return nuevoArr

// Otra forma de resolverlo:
// var newArr =Object.entries(objeto)
//   return newArr

//Con For in - más manual:
var arr = []
for(key in objeto){
  arr.push([key, objeto[key]])
}
return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var obj = {}
var contador = 1
var letraProp = []
var cantLetra = []
var strOrd = string.split('').sort()
  for(i=0; i<strOrd.length;i++){
    if(strOrd[i]===strOrd[i+1]){
      contador = contador + 1
    } else {
        cantLetra.push(contador)
        contador = 1
        letraProp.push(strOrd[i])
    }
  }
  for(i=0;i<letraProp.length;i++){
    obj[letraProp[i]] = cantLetra[i]
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

var arrStr = s.split('')
var esMayus = ''
var esMin = ''
var nuevoStr = ''


for(i=0;i<arrStr.length;i++){
    if(arrStr[i]===arrStr[i].toUpperCase()){
        esMayus = esMayus + arrStr[i]
    }else esMin = esMin + arrStr[i]
}
nuevoStr = esMayus+esMin

return nuevoStr   
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var str1 = str.split(' ')
  str2 = []

  for(i=0;i<str1.length;i++){
    str2.push(str1[i].split('').reverse().join(''))
  }
  str2 = str2.join(' ')
  return str2
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numStr = numero.toString()
  var numInvertido = numStr.split('').reverse().join('')

  if(numStr===numInvertido){
    return("Es capicua") 
  } else return("No es capicua")
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arr = cadena.split('') 
  var nuevoStr = []

  for(i=0;i<arr.length;i++){
    if(arr[i]!='a'&&arr[i]!='b'&&arr[i]!='c') nuevoStr.push(arr[i])
  }
  nuevoStr = nuevoStr.join('')
  
  return nuevoStr
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var nuevoArr = []

//UNA OPCION CON .SORT:
  arr.sort(function(a, b){
    return a.length - b.length //en forma ascendente    
});
  for(i=0;i<arr.length;i++){
  nuevoArr.push(arr[i])
  }
  return nuevoArr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var iguales = []

  for(i=0;i<arreglo1.length;i++){
    for(j=0;j<arreglo2.length;j++){
      if(arreglo1[i]==arreglo2[j]) iguales.push(arreglo1[i])
    }
  }
  return iguales
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


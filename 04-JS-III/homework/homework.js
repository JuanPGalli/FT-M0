// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  // Una opción es:
  // return array.shift()
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // return array.pop()
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  //Otra opción:
  // var nuevoArray = []
  // for(var i = 0; i < array.length; i++){
  //   nuevoArray [i] = array [i]+1  
  // }
  // return nuevoArray
  
  //Otra opción:
  // var nuevoArray = []
  // for(i=0;i<array.length;i++){
  //   nuevoArray.push(array[i]+1)
  // }
  // return nuevoArray

  for(i=0;i<array.length;i++){
    array[i] = array[i] + 1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //Una solución rápida:
  //return palabras.join(" ")
  
  // Otra Solución:
  // var cadena = palabras[0] 
  // for(i=0; i<palabras.length;i++){
  //   if(palabras.length-1===0) {
  //     return palabras[0]
  //   }
  //   else if (i>0){
  //     cadena = cadena + " " + palabras[i]
  //   }
  // }
  // return cadena
  var string = ""
  for(i=0;i<palabras.length;i++){
    if(i===palabras.length-1){
      string = string + palabras[i]
    }else string = string + palabras[i] + " "
  }
  return string
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  //Otra Solución:
  //return array.indexOf(elemento)>-1

  for(i=0;i<array.length;i++){
    if(array[i]===elemento){
      return true
    }
  }
    return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sum = 0
  for(i=0;i<numeros.length;i++){
    sum = sum + numeros[i]
  }
  return sum
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sum = 0
  for(i=0;i<resultadosTest.length;i++){
   sum = sum + resultadosTest[i]
  }
  return sum/resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  
  // var max = Math.max(...numeros)
  // return max

  var maximo = numeros[0]
  for(i=1;i<numeros.length;i++){
    if(numeros[i]>maximo) {
      maximo = numeros [i]
    }
  }
  return maximo
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  var seis = []
  for(i=0;i<=10;i++){
    seis.push(i*6)
  }
  return seis
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length===0) return 0
  var total = 1
  for(i=0;i<arguments.length;i++){
  total = total * arguments[i]
  }
  return total
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  
  //cuenta = cuenta + 1 -------> cuenta++
  var cuenta = 0
  for(i=0;i<arreglo.length;i++){
  if(arreglo[i]>18){
    cuenta = cuenta + 1
  }
  }
  return cuenta
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí   
    if(numeroDeDia===7||numeroDeDia===1){
      return "Es fin de semana"
    }
    return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  //Una opción:
  // var string = n.toString()
  // var nueve = string.charAt(0)
  // if(nueve==="9"){
  //   return true
  // }
  //   return false
  
  // Otra solución posible:
  // var string = n.toString()
  // if(string[0]==="9") return true
  // else return false

  //Otra opción:
  var entero = 10
  while(entero>9){
    entero = Math.trunc(n / 10)  //Math.trunc() va eliminando los decimales dejando sólo el entero. Ese número con el bucle llega al primer dígito del número.
  }
  if(entero === 9 || n === 9) return true
  else return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  var elemento = arreglo[0]
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]!=elemento)return false
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array1 = []
  for(i=0;i<array.length;i++){
  if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
    array1.push(array[i])
  }
    
}
  if(array1.length===3){
    return array1
  }
  return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array1 = []
  for(i=0;i<array.length;i++){
    if(array[i]>100){
      array1.push(array[i])
    }
  }
  return array1
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  var array = []
  for(i=0;i<10;i++) {
    numero = numero + 2
    if(i===numero) return "Se interrumpió la ejecución"
    array.push(numero) 
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = []
  for(i=0;i<10;i++){
    if(i===5) continue
    else numero = numero + 2 // Si ponia a sumar primero antes del IF, iba a sumar en todos los casos primero.
    array.push(numero)
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

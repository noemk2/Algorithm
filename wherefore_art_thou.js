function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);
  return collection.filter(function(obj) {
    return sourceKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
// ejecucion
console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);

//Object.keys() devuelve una array (que contine un string) de las propiedades names de un objeto, en el mismo orden como se obtiene en un loop normal
//Object.keys() si en el objeto hay mas de un names, devuelve un array con 2 elementos (string)
//devuelve un array con las llaves (en string) de los objetos o arrays
//var obj = { 0: 'a', 1: 'b', 2: 'c' };
//console.log(Object.keys(obj)); // console: ['0', '1', '2']
//collection es un array que contiene e en forma de objetos
//filter crea un nuevo array con todos los e  que cumplan la condicion implementada por la funcion dada
//filter devuelve un array si en la fn devuelve un true
//Object.prototype.hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada
//o = new Object();
//o.prop = 'exists';
//function changeO() {
//o.newprop = o.prop;
//delete o.prop;
//}
//o.hasOwnProperty('prop');   // returns true
//changeO();
//o.hasOwnProperty('prop');   // returns false
//Object.prototype.hasOwnProperty() busca si la propiedad existe y devuelve un booleano
//para acceder a las propiedades de un objeto
//Notacion punto
//Object.names prohivido string
//Notacion Corchetes
//Object[names] name puede ser un string
//no nesecitamos declarar el objeto padre para acceder a u names, basta con colocar {}
//el objeto tiene propiedad y valores {propiedad: valor}
//propiedad tambien le dicen names
//en anidado el que mas se repite es el hijo, el padre solo termina el ciclo si el hijo completa la tarea
//el if es tambien llamado condicional
//si en anidado, el hijo tiene una condicional y no cumple con esta pasa a la otra linea de codigo o se sale del hijo y entra al padre
//si srcKeys[i] es 0 da false en uno en el condicional  pasar a srcKeys[i] es 1 NO COMIENZA OTRO ob
// el for se va asegurar que se solo se salga (del for)si en los i (2 veces) sean falsos para que se salga y retorne true
//
//Array.prototype.every() Determina si todos los e en el array satisfacen una condicion
//Array.prototype.every(fnc) devuelve un booleano
//Array.prototype.every(fnc) fnc es una fn que funciona como un condicional (si es true devuelve true y si es false devuelve false)
//every() en una array vacio devuelve true
//every determina si TODOS (no uno) los elementos del array satisfacen una condicion
// si un elemento no satisface al every da false
//
//Array.prototype.map(fn) crea un nuevo array con los resultados del a llamada a la funcion indicada aplicados a cada uno de los elementos
//Array.prototype.map(fn) fn es la funcion que modificara a cada uno de los elementos del array
// y devolvera una copia de ese mismo array modificado de la fn
//Array.prototype.reduce() ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un valor unico
// la mayoria de los ejmplos de reduce son sumar los elementos de una array
// tambien se puede integrar otros array
//Si con map evaluamos a cada elemento de un array, retornando un booleano, NOS DEVUELVE un array con la misma cantidad de elementos que tiene el array PERO todos booleanos

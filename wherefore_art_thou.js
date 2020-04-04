function whatIsInAName(collection, source) {
  //obtener los names de source (en forma de array)
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
// ejecucion
console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
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
//el objeto tiene propiedad y valos  {propiedad: valor}
//propiedad tambien le dicen names
//en anidado el que mas se repite es el hijo, el padre solo termina el ciclo si el hijo completa la tarea
//el if es tambien llamado condicional
//si en anidado, el hijo tiene una condicional y no cumple con esta pasa a la otra linea de codigo o se sale del hijo y entra al padre

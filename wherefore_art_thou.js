function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  // filter the collection
  return collection.filter(function(obj) {
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
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
//Object.keys() devuelve una array de las propiedades names de un objeto, en el mismo orden como se obtiene en un loop normal
//devuelve un array con las llaves (en string) de los objetos o arrays
//var obj = { 0: 'a', 1: 'b', 2: 'c' };
//console.log(Object.keys(obj)); // console: ['0', '1', '2']
//filter crea un nuevo array con todos los e  que cumplan la condicion implementada por la funcion dada

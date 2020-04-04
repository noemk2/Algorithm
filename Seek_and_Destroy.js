const destroyer = (array, ...args) => array.filter(x => !args.includes(x));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//arguments[n] devuelve el valor del lugar n... muy similar al array (es palabra recervada)
//Array.prototype: al igual que existe Object.prototype existe en version de array este contiene todos los arrays
//Array.prototype puede reemplazarse por []
//slice(a, b) devuelve una copia del array (no mutable) ya a es desde donde va agarra (no inclusivo) y b esel fin
//call llama a una fn con un valor 'this' asignado y argumentos provistos de forma individual fun.call(thisArg[, arg1[, arg2[, ...]]])
//array-like slice puede ser usado para convertir a Array (Array.prototype.slice.call(arguments, 0)
//filter crea un nuevo array con los elementos que cumplan con la condicion implementada por la fn dada(like life)k
// i y j son distintos
// delete trasfoma un e del array en empty
//Boolean convierte un valor no booleano a un valor booleano, este devuelve true todos los numeros, menos 0, empty , vacio, null
//filter condiciona con Boolean si el valor no es vacio (empty) para que devuelva valores con numeros
//n
//.from crea una nueva instancia de Array a partir de un objeto iterable
//Array.from(arrayLike[, mapFn[, thisArg]])
//console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
// .includes() determina si una matrix incluye un determinado elemento devuelve true o false
//const array1 = [1, 2, 3];
//console.log(array1.includes(2));
// expected output: true
//n
// ... trasfoma en lista de argumentos y si lo dejas encerrado en [] se trasfoma en array
//Spread Operator (...) permite que una expresion sea expandida en situaciones donde se esperan  multiples args o multiples e
//f(...iterableObj);
//... tambien trasfoma un array a una lista de args
//let numeros = [4, 16, 25, 2, 45, 8];
//let numeroMayor = Math.max(numeros);
//console.log(numeroMayor); // NaN
//
//let numeros = [4, 16, 25, 2, 45, 8];
//let numeroMayor = Math.max(...numeros);
//console.log(numeroMayor); // 45
//let numeros = [10, 4, 7, 15, 3, 25];
//console.log(numeros); // Imprime un array.
//console.log(...numeros); // Imprime una lista de argumentos.

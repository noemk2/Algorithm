function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//arguments[n] devuelve el valor del lugar n... muy similar al array (es palabra recervada)
//Array.prototype: al igual que existe Object.prototype existe en version de array este contiene todos los arrays
//slice(a, b) devuelve una copia del array (no mutable) ya a es desde donde va agarra (no inclusivo) y b esel fin
//call

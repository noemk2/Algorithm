function diffArray(arr1, arr2) {
  return [...unciclo(arr1, arr2), ...unciclo(arr2, arr1)];
  function unciclo(a, b) {
    return a.filter(x => b.indexOf(x) === -1);
  }
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// la fn dentro del filter funciona como un if
// includes devuelve un boleano
// ... trasfoma en lista de argumentos y si lo dejas encerrado en [] se trasfoma en array
// indexOf devuelve -1 si no encuentra ese parametro y numero (coordenada)

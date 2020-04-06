cadena = "Para más información, vea Capítulo 3.4.5.1";
expresion = /(capítulo \d+(\.\d)*)/i;
hallado = cadena.match(expresion);
console.log(hallado);

//var cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";*/
//var expresion = /[A-E]/gi;
//var array_emparejamientos = cadena.match(expresion);
//console.log(array_emparejamientos);
//la flag insensitive (i) nos agarra las mayusculas y minusculas
//match me devuelve en string

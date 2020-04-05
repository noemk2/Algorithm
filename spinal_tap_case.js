function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
}
function spinalCase2(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}
function spinalCase3(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// test here
console.log(spinalCase("thisIsSpinalTap"));
// 1er alternativa
//\s+ matches any whitespace character (equal to [\r\n\t\f\v ])
//+ Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed
// 2da alternativa
//_+ matches the character _ literally (case sensitive)
//+ Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed
//global flags
// g modifier: global. All matches (don't return after first match)
//
// 1er alternativa
// () match a single character
// ([a-z]) Match a single character present in the list below [a-z]
//a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)
// 2do alternativa
// ([A-Z]) Match a single character present in the list below [A-Z]
// A-Z a single character in the range between A (index 65) and Z (index 90) (case sensitive)
//
//String.prototype.replace() devuelve una nueva cadena con algunas o todas las coincidendicas de un patron, siendo cada una de estascoincidencias reemplazadas por remplazo. El ptron puede ser una cadena o un RegExp,  y el reemplazo puede ser una cadena o una funcion que sera llamada para cadacoincidencia. Si el patron es una cadena, solo la primera coincidencia sera reemplazada
//patron  puede ser una cadena o regex
// reemplazo puede ser una cadena o fn que sera llamada para cada coincidencia
/*function replacer(str, p1, p2, offset, s)*/
//{
//return str + " - " + p1 + " , " + p2;
//}
//var newString = "XXzzzz".replace(/(X*)(z*)/, replacer);
/*console.log(newString); // XXzzzz - XX , zzzz*/
//cadena.replace(regexp|substr, newSubStr|function[,   flags]);
// substr un objeto string que sera reemplazado por nuevaSubcadena
// nuevaSubcadena el objeto string que reemplaza por nuevaSubcadena
// String.prototype.toLowerCase() devuelve el valor en minusculas de la cadena que realiza la llamada
//el regex se coloca sin comillas en el replace
// String.prototype.split() divide un objeto de tipo String en una array (vertor) de cadesnas mediante la separacion de la cadena en subcadenas
//cadena.split([separador][,limite])
//split divide y convierte de string a array , y los separa  'hola buenos dias' --> ['hola', 'buenos', 'dias']
// join() une todos los e de una matriz (o objeto similar a una matrix) en unacadena y devuelve esta cadena
//Array.prototype.join()
///(?:_| )+/
/*+ Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)*/
//1st Alternative _
//_ matches the character _ literally (case sensitive)
//2nd Alternative
/*matches the character   literally (case sensitive)*/
/*1st Alternative \s*/
//\s matches any whitespace character (equal to [\r\n\t\f\v ])
//2nd Alternative _
//_ matches the character _ literally (case sensitive)
//3rd Alternative (?=[A-Z])
//Positive Lookahead (?=[A-Z])
//Assert that the Regex below matches
//Match a single character present in the list below [A-Z]
/*A-Z a single character in the range between A (index 65) and Z (index 90) (case sensitive)*/

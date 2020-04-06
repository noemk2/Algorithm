function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));
//otras test
//translatePigLatin("california") should return "aliforniacay".
/*translatePigLatin("paragraphs") should return "aragraphspay".*/
//translatePigLatin("glove") should return "oveglay".
//translatePigLatin("algorithm") should return "algorithmway".
/*translatePigLatin("eight") should return "eightway".*/

//^
//Por ejemplo, /^A/ no encuentra la 'A' en "an A", pero si encuentra la primera 'A' en "An A."
//[^abc] selecciona todos los que no presentan in abc
//String.prototype.match() se usa para obtener todas las ocurrencias de una expresion regular dentro de una cadena
//cadena.match(regexp)
//regexp
//Un objeto expresión regular. Si se pasa un objeto obj que no es expresión regular,
//se convierte implícitamente a RegExp usando new RegExp(obj)
//

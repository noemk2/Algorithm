//Objeto 1
var persona = {
  tomarCerveza: function() {
    return this.nombre; //nombre no esta  definido
  }
};
//Objeto 2
var personal = { nombre: "Pepe" };

//Ejecucion
console.log(persona.tomarCerveza.call(personal));

//el call nos ayuda a la comunicacion entre dos objetos
//el objeto1 podria tener un error de this. nombre no encontrado Pero cuando se ejecuta la funcion
//en la ejecucion el objeto1 se busca la propiedad (fn) tomarCerveza si se ejecuta asi nomas rs es idefinido
//se ejecuta call y arg personal que es un obj  en ningun momento le damos acceso a nombre...
//

var x = 9;
var module = {
  x: 85,
  getX: function() {
    console.log("esto es " + this.x);
    return this.x;
  }
};
module.getX();
var retriveX = module.getX;
retriveX();

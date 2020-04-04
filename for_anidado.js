for (i = 0; i < 2; i++) {
  for (j = 0; j < 3; j++) {
    for (o = 0; o < 1; o++) {
      console.log(i + "-" + j + "-" + o);
    }
  }
}
//resultado
// en la primera ronda i se mantiene en cero
// j va aumentando de 1 en 1
// al completar el primer ciclo se procede a aunmentar 1 a i
//asi susesivamente
//conclucion
// el padre es el que manda y aumenta menos que el hijo
// el hijo hace mas ciclos que el padre

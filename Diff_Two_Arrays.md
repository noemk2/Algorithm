#Condiciones para resolver
##mal
hay que ordenar de 1ero el array que tenga mayor cantidad de e
es cuestion de comparar los arrays . hay que comparar cada e con e, y si al terminar el ciclo encuentra
emparejamiento colocarlo en
##bien

#Observaciones

1. los dos array son desiguales a excepcion que "pink wool" esta agregado al 1ero (estan ordenados)
2. los dos array son iguales(en # de e), pero vamos a buscar su emparejamiento, y los unicos que no lo tienen son ["diorite", "pink wool"]
3. los dos array son iguales (en # de e) y tambien en e iguales retorna array vacio
4. si comparo los 2 array y no coincide ningun elemento retorname esos elementos

#Hipotesis 1
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]

inicia ciclo
si e = e
tachamelos? = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'] or pasa al siguente
si al terminar el ciclo e != e
diferentes = ['pink wool'] y pasa al siguente

#Hipotesis 2
["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt", "dead shrub"]
#Hipotesis 3
["andesite", "grass", "dirt", "dead shrub"],
["andesite", "grass", "dirt", "dead shrub"]
##Hipotesis 3
[1, 2, 3, 5, 1, 2, 3, 4, 5],
[1, 2, 3, 5],
[1, 2, 3, 4, 5],
##Hipotesis 4
[1, "calf", 3, "piglet", 1, "calf", 3, 4],
[1, "calf", 3, "piglet"],
[1, "calf", 3, 4],

#tesis
unir los 2 array en uno solo
hacer un ciclo donde por cada e de array-union vamos a comparar cada e del array1 y array2
si existe uno diferente guardemelo en un acumulador

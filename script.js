/*Ejercicio 1: Crear y modificar un arreglo
Instrucciones:
Crea un arreglo llamado frutas con tres frutas.



Agrega una fruta al final del arreglo.

Agrega una fruta al principio del arreglo.


Elimina la última fruta.


Elimina la primera fruta.


Muestra el contenido del arreglo con console.log.*/




let frutas = ['pera', 'manzana', 'naranja', 'durazno']

let listaFrutas = ''
for (let indice = 0; indice < frutas.length; indice++) {
    listaFrutas = listaFrutas + frutas[indice]
}

frutas.push("arandano");

frutas.unshift("fresa");

let frutaEliminada = frutas.pop();
console.log(fruta)
let frutaEliminada = frutas.shift();
console.log(frutas)
/* Ejercicio 2: Contar elementos
Instrucciones:
Crea un arreglo de nombres.


Muestra cuántos nombres hay en el arreglo usando .length.


Usa push para agregar dos nombres.


Vuelve a mostrar cuántos nombres hay
*/

let nombres = ["Alejo", "Agustin", "Luciano", "Benja"];
console.log(nombres);

console.log(nombres.length);

nombres.push("Facu", "Ramiro");
console.log(nombres);

console.log(nombres.length);
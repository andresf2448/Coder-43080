/* 
estructura de un arreglo
[elem1, elem2, ..., elemn];
*/

// const vacio = [];
// const numeros = [1, 2, 3, 4, 3, 2, 5];
// const nombres = ["andres", "camila"];
// const valores = [true, false, false, true];
// const variados = [1, "andres", true];

// console.log(nombres[1]);
// console.log(numeros[1] + numeros[3]);

// const nombres = ["andres", "camila", "pepito", "pepita"];
// //length te devuelve la cantidad de elementos del arreglo
// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// .push Agrega un elemento al final del arreglo
// const nombres = ["andres", "camila"];
// nombres.push("pepito");
// console.log(nombres);

// // .unshift agrega un elemento el principio del arreglo
// nombres.unshift("mariana".toUpperCase());
// console.log(nombres);

// // .pop sacar el último elemento del arreglo
// nombres.pop();
// console.log(nombres);

// //shift sacar el primer elemento del arreglo
// nombres.shift();
// console.log(nombres);

// const nombres = ["andres", "camila", "pepito", "pepita", "juan", "jose"];
// .splice elimina varios elementos del arreglo
// nombres.splice(1, 2);
// console.log(nombres);

// .join une en un solo string todos los elementos separados por lo pasado como parametro
// console.log(nombres.join(" "));
// let info = ["andres", "velasquez"];
// console.log(info.join(" "));
// let numeros = [2, 4, 5, 6, 7];
// console.log(numeros.join("*"));

//concat une dos arreglos en uno solo
// const mascotas = ["zeus", "firu"];
// const varios = nombres.concat(mascotas);
// console.log(varios);

// const nombres = ["andres", "camila", "pepito", "pepita", "juan", "jose"];

//slice hace una copia de un fragmento del arreglo
// const copia = nombres.slice(1, 3);
// console.log(copia);

// const nombres = [];

// for (let i = 0; i < 3; i++) {
//   let nombre = prompt("Ingrese el nombre");
//   nombres.push(nombre);
// }

// console.log(nombres);

// const nombres = ["andres", "camila", "pepito", "pepita", "juan", "jose"];

//indexOf devuelve la posicion de un elemento dado
// console.log(nombres.indexOf("pepito"));
// console.log(nombres.indexOf("pepito1"));

// includes verifica la existencia de un elemento en el arreglo
// console.log(nombres.includes("juan"));
// console.log(nombres.includes("juan1"));

// const productos = ["camisa", "zapato", "pantalon"];

// let nombre = prompt("Ingrese el nombre del producto a buscar");
// let encontrado = productos.includes(nombre);

// if(encontrado){
//   alert("Producto disponible");
// }else{
//   alert("producto no disponible");
// }

// const productos = ["camisa", "zapato", "pantalon"];
// productos.reverse();
// console.log(productos);

// const productos = ["camisa", "zapato", "pantalon"];
// productos.splice(1, 0, "media");
// console.log(productos);
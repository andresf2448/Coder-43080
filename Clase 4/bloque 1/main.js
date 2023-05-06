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
// productos.splice(1, 1, "media");
// console.log(productos);

// const productos = ["camisa", "zapato", "pantalon"];

// const eleminar = (nombre) => {
//   let indice = productos.indexOf(nombre);

//   if(indice != -1){
//     productos.splice(indice, 1);
//     console.log(productos);
//   }
// };

// eleminar("camisa");

//ARREGLOS + OBJETOS
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1350 },
//   { id: 3, nombre: "media", precio: 750 },
//   { id: 4, nombre: "gorra", precio: 345 },
// ];

// for(const item of productos){
//   console.log(item.nombre);
//   console.log(item.precio);
// }

// class Producto {
//   constructor(id, nombre, precio) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [];
// const producto1 = new Producto(1, "camisa", 1000);
// const producto2 = new Producto(2, "media", 100);
// const producto3 = new Producto(3, "zapato", 1300);

// productos.push(producto1);
// productos.push(producto2);
// productos.push(producto3);

// console.log(productos);

const a = [1, 2, 3, 4];
a.push(7, 6, 8);
console.log(a);
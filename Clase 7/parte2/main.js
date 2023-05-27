// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

// let usuario1 = { nombre: "camila", edad: 18 };
// let usuario2 = {...usuario1};

// usuario2.nombre = "sofia";
// console.log(usuario1);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// console.log(nombres.join(" "));
// console.log(...nombres);

// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Carlos", "Mariela"];

// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// const usuario1 = {
//   nombre: "juan",
//   edad: 24,
//   curso: "javascript",
// };

// const usuario2 = {
//   ...usuario1,
//   curso: "react",
//   direccion: "AV",
// };

// console.log(usuario2);

// rest parameter

// function sumar(...numeros) {
//   return numeros.reduce((acum, item) => acum + item, 0);
// }

// console.log(sumar(4, 5, 6, 8, 8, 4, 2, 2));
// console.log(sumar(4, 5));

// const mensaje = () => {
//   console.log("hola");
// };
// let edad = 20;

// edad >= 18 ? mensaje() : null;

/* 
condicionales

if(condicion1){
  codigo a ejecutar cuando la condición1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let nombre = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   nombre = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

//FUNCIONES
// function sumar(x, y) {
//   return x + y;
// }

// const sumar = (x, y) => {
//   return x + y;
// };

// const sumar = (x, y) => x + y;
// () => "hola";
// x => x + 5;

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.array = [];
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("juan", 45);
// console.log(persona1);

// forEach
// filter
// map
// find

// const numeros = [5, 4, 3, 56];

// numeros.forEach(item => {
//   console.log(item);
// });

// for(const item of numeros){
//   console.log(item);
// }

import { nombre } from "./funciones.js";
nombre();

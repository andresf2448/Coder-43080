let nombre = "pepito";
let edad = 45;
let direccion = "AV";

/* 
estructura de un objeto
{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// const persona2 = {
//   nombre: "pepita",
//   edad: 47,
//   direccion: "AV1",
// };
// let clave = "nombre";

// console.log(persona.nombre);
// console.log(persona[clave]);

// persona.altura = 1.9;
// persona["peso"] = 54;

// console.log(persona);

// persona.altura = 1;
// persona["peso"] = 50;

// console.log(persona);

//FUNCIONES CONSTRUCTORAS
// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 40, "AV1");
// console.log(persona2.nombre);
// console.log(persona2.edad);
// console.log(persona2.direccion);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// });

// const persona2 = new Persona({
//   nombre: "pepita",
//   edad: 40,
//   direccion: "AV1",
// });

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// let persona = {
//   nombre: "pepito",
//   edad: 45,
//   telefonos: {
//     casa: 1234,
//     trabajo: 3423,
//     personal: 3445
//   }
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// const persona1 = new Persona("pepito", 45, "AV");
// console.log(persona1);
// persona1.hablar();

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// console.log(persona1);

// for(const key in persona1){
//   console.log("clave", key);
//   // console.log("valor", persona1[key]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function(){console.log(`Hola soy ${this.nombre}`);}
// }

// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");
// console.log(persona1.nombre);
// persona1.hablar();

class Producto{
  constructor(nombre, precio, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("Monitor gamer BenQ", "$519000", "http:asdfhj")
const producto2 = new Producto("Monitor gamer samsung", "$295319", "http:asd")
console.log(producto1);
producto1.vender();
console.log(producto1);

console.log(producto2);
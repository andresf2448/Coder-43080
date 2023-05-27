//OPERADOR ++

// let numero = 30;

// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
condicion ? codigo cuando condicion verdadera : codigo cuando la condicion es falsa
*/

// let edad = 20;

// if(edad >= 18){
//   console.log("puede entrar a la fiesta");
// }else{
//   console.log("No puedes entrar a la fiesta");
// }

// edad >= 18 ? console.log("puede entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

// const usuario = {
//   nombre: "andres",
//   edad: 13,
// };
// let permiso;

// if (usuario.edad > 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("puedes entrar");
// } else {
//   console.log("no puedes entrar");
// }

// const usuario = {
//   nombre: "andres",
//   edad: 23,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar") : console.log("no puedes entrar");

// let edad = 18;
// let nombre = "octavio";

// edad >= 18
//   ? nombre === "octavio"
//     ? console.log("eres octavio puedes enetrar")
//     : console.log("no eres octavio no puedes entrar")
//   : console.log("no puedes entrar");

/* 
operador1 && operador2 retorna operador1 cuando este representa algo falso de lo contrario retorna operador2

operador1 || operador2 retorna operador1 cuando este representa algo verdadero de lo contrario retorna operador2
*/

// const carrito = [3, 4, 6];

// if (carrito.length === 0) {
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "juan",
//   edad: 13,
// };

// const registro = usuario.edad >= 18 && new Date();
// registro ? console.log(registro) : console.log("su edad no es permitida");

// console.log( 0 || "Falsy")  // falsy
// console.log( 40 || "Falsy")//  40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy")  // falsy
// console.log( "Hola Mundo" || "Falsy")  //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy") // falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy")  //falsy

// const usuario1 = {
//   nombre: "juan",
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;

// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.cursos?.react || "La propiedad no existe");

// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   direccion: "AV",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// let { nombre, edad, direccion } = usuario;

// console.log(nombre);

// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefonos: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { cel },
// } = usuario;

// console.log(nombrePersona, cel);

// const usuarios = [
//   { id: 1, nombre: "juan" },
//   { id: 2, nombre: "andres" },
//   { id: 3, nombre: "octavio" },
//   { id: 4, nombre: "pedro" },
// ];

// let usuario = usuarios[0];

// let { id, nombre } = usuario;

// usuarios.forEach((item) => {
//   const { id, nombre } = item;

//   console.log(id, nombre);
// });

// const desestructurar = ({ edad, nombre }) => {
//   console.log(edad, nombre);
// };

// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefonos: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// desestructurar(usuario);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// const [a, , b] = nombres;
// console.log(a, b);

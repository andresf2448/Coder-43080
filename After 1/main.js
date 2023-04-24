// let edad = 25;

// switch(edad){
//   case 25:
//     console.log("Inyeccion 1");
//     break;

//   case 45:
//     console.log("Inyeccion 2");
//     break;

//   case 55:
//     console.log("Inyeccion 3");
//     break;

//   default:
//     console.log("Edad no apta para la inyeccion");
//     break;
// }

// let contrasena = prompt("Ingrese la contraseña");

// while(contrasena != "andres1234"){
//   alert("Contraseñ incorrecta");
//   contrasena = prompt("Ingrese la contraseña");
// }

// alert("Bienvenido");

// let contador = 0;
// let numero = 11;

// for (let i = 2; i < numero; i++) {
//   if (numero % i === 0) {
//     contador = contador + 1;
//   }
// }

// if (contador > 0) {
//   console.log("El número no es primo");
// } else {
//   console.log("El número es primo");
// }

// let numero = parseInt(prompt("Escribe un número"));

// while(numero != "esc"){
//   let contador = 0;
//     for(let i = 2; i < numero; i++){
//         if(numero % i === 0){
//             contador = contador + 1;
//         }
//     }

//     if(contador > 0){
//         alert("El número es primo");
//     }else{
//         alert("El número es primo");
//     }
//     numero = parseInt(prompt("Escribe un número"));
// }

/* 
string, letra

*/

// let nombre = "andres"
// let mensaje = "Hola " + nombre;
// let mensaje1 = `Hola ${nombre}`;
// console.log(mensaje1);

let string = prompt("Ingrese una palabra");
let palabra = prompt("Ingrese una palabra para buscar");

if (string.includes(palabra)) {
  alert("Está");
} else {
  alert("No está");
}

/* 
string = "andres"
letra = "n"


*/
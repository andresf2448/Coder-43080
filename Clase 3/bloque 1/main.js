/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
}
*/

// function saludar(){
//   let nombre = prompt("Ingrese un nombre");
//   let mensaje = `Hola ${nombre}`;
//   alert(mensaje);
// }

// saludar();

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

// function saludar(saludo, nombre){
//   console.log(`${saludo} ${nombre} un gusto!`);
// }

// saludar("hola", "andres");
// saludar("Bienvenida", "camila");

// function sumar(numero1, numero2) {
//   let resultado = numero1 + numero2;
//   alert(resultado);
// }

// let numero1 = parseInt(prompt("Ingrese el primer numero"));
// let numero2 = parseInt(prompt("Ingrese el segundo numero"));
// sumar(numero1, numero2);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// function multiplicar(num) {
//   console.log(num * 5);
// }

// let resultado = sumar(5, 6);

// multiplicar(resultado);

// function saludar(){
//   console.log("hola");
//   console.log("chao");
//   return
// }

// saludar();

// function calculadora(numeroUno, numeroDos, operacion) {
//   switch (operacion) {
//     case "+":
//       return numeroUno + numeroDos;
//       break;

//     case "-":
//       return numeroUno - numeroDos;
//       break;

//     case "*":
//       return numeroUno * numeroDos;
//       break;

//     case "/":
//       return numeroUno / numeroDos;
//       break;

//     default:
//       return "Operacion no encontrada";
//       break;
//   }
// }

// let numeroUno = parseInt(prompt("Ingrese el numero"));
// let numeroDos = parseInt(prompt("Ingrese el numero"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numeroUno, numeroDos, operacion);
// alert(`El resultado de ${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// let resultado = 0;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(5, 6);
// console.log(resultado);

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2){
//   let resultado = num1 - num2;
//   return resultado;
// }

// function multiplicar(num1, num2){
//   let resultado = num1 * num2;
//   return resultado;
// }

// function dividir(num1, num2){
//   let resultado = num1 / num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

// const suma = (a, b) => {
//   return a + b;
// };
// x => {return x}
// () => {return "hola";}
// (x, y) => x + y;

// const suma = (x, y) => x + y;

// console.log(suma(5, 6));

// const suma = (x, y) => x + y;
// function suma(x, y) {
//   return x + y;
// }

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioproducto = 1000;
let descuento = 10;

let nuevoPrecio = resta(suma(precioproducto, iva(precioproducto)), descuento);
                // = resta(suma(1000, iva(1000)), 10);
                // = resta(suma(1000, 210), 10);
                // = resta(1210, 10);
                // = 1200
console.log(nuevoPrecio);

// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// function operaciones(op) {
//   if (op === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (op === "restar") {
//     return (a, b) => a - b;
//   }

//   if (op === "multiplicar") {
//     return (a, b) => a * b;
//   }

//   if (op === "dividir") {
//     return (a, b) => a / b;
//   }
// }

// let suma = operaciones("sumar");
// console.log(suma(6, 3));

// let resta = operaciones("restar");
// console.log(resta(6, 7));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([1, 4, 3, 5, 6], console.log);
// const duplicados = [];

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([1, 4, 3, 5, 6], (el) => {
//   duplicados.push(el * 2);
// });

// console.log(duplicados);

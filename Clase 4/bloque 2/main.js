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

//METODOS AVANZADOS DE LOS ARREGLOS
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1320 },
//   { id: 3, nombre: "gorra", precio: 750 },
//   { id: 4, nombre: "media", precio: 1500 },
// ];

//forEach recorrer un arreglo
// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encunetra el primer elemento que cumple la condicion pasada
// let nombre = prompt("Ingrese el nombre del producto a buscar");

// const encontrado = productos.find((item) => item.nombre === nombre);

// if (encontrado) {
//   let mensaje = `
//   Id: ${encontrado.id}
//   Nombre: ${encontrado.nombre}
//   Precio: $${encontrado.precio}
// `;

//   alert(mensaje);
// }else{
//   alert("Producto no encontrado");
// }

//filter encuentra todos los elementos que cumplen la condicion indicada
// let precio = parseInt(prompt("Ingrese el precio minimo del producto"));

// let encontrados = productos.filter((item) => item.precio > precio && item.nombre.includes("o"));

// encontrados.forEach((item) => {
//   let mensaje = `
//   Id: ${item.id}
//   Nombre: ${item.nombre}
//   Precio: $${item.precio}
// `;

//   alert(mensaje);
// });

//some verifica si al menos un elemento del arreglo cumple la condicion
// console.log(productos.some(item => item.precio === 750));
// console.log(productos.some(item => item.precio === 2000));

//map transformar los elementos del arreglo

// const nombres = productos.map(item => item.nombre);
// console.log(nombres);

// const precio = productos.map(item => item.precio);
// console.log(precio);

// const preciosNavidad = productos.map(item => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21
//   }
// });

// console.log(preciosNavidad);

//reduce reduce todo un arreglo a un único valor
// const numeros = [3, 2, 4, 5, 5, 66];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1320 },
//   { id: 3, nombre: "gorra", precio: 750 },
//   { id: 4, nombre: "media", precio: 1500 },
// ];

// const total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort ordenar un arreglo
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];
console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
);

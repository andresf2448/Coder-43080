//setTimeout(funcion, timer);

// setTimeout(() => {
//   console.log("Hola");
// }, 3000)

// console.log("inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 5000);

// console.log("final");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicia proceso");

// setTimeout(() => {
//   console.log("Mitad de proceso");
// }, 0);

// console.log("Fin proceso");

// function multiply (x, y) {
//   return x * y;
// }

// function printSquare (x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicia proceso");

// setTimeout(() => {
//   console.log("Mitad de proceso");
// }, 0);

// console.log("Fin proceso");

//setInterval
// setInterval(() => {
//   console.log("Hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//PROMESAS
// new Promise((resolve, reject) => {
//   //codigo de la promesa
// })

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     valor ? resolve(["andres", "juan"]) : reject("Promesa rechazada");
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("proceso terminado"));

/////////////////////////////////////////////
const DB = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "media", precio: 1000 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DB);
    }, 3000);
  });
};
////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
        <hr />
      `;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));

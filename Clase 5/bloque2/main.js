// console.log(document.body);

//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let saludo = document.getElementById("saludo");
// let seccion = prompt("INgrese la seccion a la que desea ingresar");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "azul";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
//   saludo.className = "rojo";
// } else {
//   saludo.innerHTML = "<h1>Bienvenido a nuestra super página</h1>";
//   saludo.className = "verde";
// }

//AGREGAR NODOS
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); //crear la etiqueta
// parrafo.innerHTML = "<h1>Hola a todos</h1>"; //asignación de contenido
// // document.body.append(parrafo); //asginación del padre
// contenedor.append(parrafo);

//LIMINAR UN NODO
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// const nombres = ["walter", "agustin", "pepito", "andres", "camila"];
// let contenedor = document.getElementById("contenedor");

// nombres.forEach(nombre => {
//   let div = document.createElement("div");
//   div.innerHTML = nombre;
//   contenedor.append(div);
// })

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 1100 },
  { id: 3, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "media", precio: 400 },
  { id: 4, nombre: "media", precio: 400 },
];
let contenedor = document.getElementById("contenedor");

productos.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
});
